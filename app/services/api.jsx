import axios from 'axios';
import Cookies from 'js-cookie';
import objectToFormData from 'object-to-formdata';
import { apiEndpoint } from '../../config/app';

const isHeadersValid = headers => (
  headers.uid && headers.client && headers['access-token']
);

const cookiesOnClient = () => ({
  get(name) {
    return Cookies.get(name);
  },
  set(name, value) {
    // Look expires doc
    Cookies.set(name, value, { expires: 365 });
  }
});

const cookiesOnServer = (req, res) => ({
  get(name) {
    return req.cookies[name];
  },
  set(name, value) {
    // Look expires doc
    res.cookie(name, value);
  }
});

function createRequestPromise(method, url, data, cookiesManager, { params, multipart, headers } = {}) {
  let authHeaders = {
    'access-token': cookiesManager.get('access-token'),
    'token-type': cookiesManager.get('token-type'),
    uid: cookiesManager.get('uid'),
    expiry: cookiesManager.get('expiry'),
    client: cookiesManager.get('client'),
    ...headers
  };

  const options = {};

  options.method = method;
  options.headers = isHeadersValid(authHeaders) ? authHeaders : {};
  options.url = `${apiEndpoint}${url}`;
  options.params = params || {};
  options.data = data ? (multipart ? objectToFormData(data) : data) : null;
  options.transformResponse = [
    (response) => {
      if (typeof response === 'string') {
        try {
          return JSON.parse(response);
        } catch (e) {
          console.log('Failed to parse server response');
        }
      }
      return response;
    }
  ];

  return axios(options)
    .then((response) => {
      if (isHeadersValid(response.headers)) {
        cookiesManager.set('access-token', response.headers['access-token']);
        cookiesManager.set('uid', response.headers.uid);
        cookiesManager.set('expiry', response.headers.expiry);
        cookiesManager.set('token-type', response.headers['token-type']);
        cookiesManager.set('client', response.headers.client);
      }

      return response;
    })
    .catch((err) => {
      throw err.response;
    });
}

export default (req = null, res = null) => {
  const cookiesManager = req && res ? cookiesOnServer(req, res)
                                    : cookiesOnClient();

  return {
    get(url, data, options = {}) {
      return createRequestPromise('GET', url, data, cookiesManager, options);
    },
    post(url, data, options = {}) {
      return createRequestPromise('POST', url, data, cookiesManager, options);
    },
    put(url, data, options = {}) {
      return createRequestPromise('PUT', url, data, cookiesManager, options);
    },
    patch(url, data, options = {}) {
      return createRequestPromise('PATCH', url, data, cookiesManager, options);
    },
    delete(url, data, options = {}) {
      return createRequestPromise('DELETE', url, data, cookiesManager, options);
    }
  };
};
