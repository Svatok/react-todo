import { push } from 'react-router-redux';
import { authService } from '../services';
import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import api from '../services/api';
import showFormErrors from '../utils/showFormErrors';
import { deleteTokenFromCookies } from '../utils/tokens';

import * as types from '../types';

function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

function signUpError(message) {
  return {
    type: types.ERROR_SIGNUP_USER,
    message
  };
}

function beginSignUp() {
  return { type: types.START_SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: types.SUCCESS_SIGNUP_USER,
    message
  };
}

function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return (dispatch) => {
    dispatch(beginLogin());

    return authService().login(data)
      .then((response) => {
          dispatch(loginSuccess('You have been successfully logged in'));
          dispatch(push('/'));
      })
      .catch((err) => {
        dispatch(loginError('Oops! Invalid username or password'));
      });
  };
}

export const submitSignUp = ({ email, password, password_confirmation }, dispatch) => {
  dispatch({ type: types.START_SIGNUP_USER });
  return api()
    .post('/auth', {
      email,
      password,
      password_confirmation,
    })
    .then((response) => {
      dispatch({
        type: types.SUCCESS_SIGNUP_USER,
        payload: response.data.data
      });
      browserHistory.push('/');
    })
    .catch((error) => {
      dispatch({ type: types.ERROR_SIGNUP_USER });
      showFormErrors(error.data.errors);
    });
};


export const logOut = () => (dispatch) => {
  dispatch({ type: types.START_LOGOUT_USER });
  return api()
    .delete('/auth/sign_out')
    .then((response) => {
      deleteTokenFromCookies();
      dispatch({
        type: types.SUCCESS_LOGOUT_USER,
        payload: response
      });
      browserHistory.push('/');
    })
    .catch((error) => {
      dispatch({
        type: types.ERROR_LOGOUT_USER,
        payload: error
      });
    });
};

// export function logOut() {
//   return (dispatch) => {
//     dispatch(beginLogout());
//
//     return authService().logOut()
//       .then((response) => {
//           dispatch(logoutSuccess());
//       })
//       .catch((err) => {
//         dispatch(logoutError());
//       });
//   };
// }
