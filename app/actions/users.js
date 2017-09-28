import { push } from 'react-router-redux';
import { authService } from '../services';
import { SubmissionError } from 'redux-form';
import { browserHistory } from 'react-router';
import api from '../services/api';
import showFormErrors from '../utils/showFormErrors';
import { deleteTokenFromCookies } from '../utils/tokens';

import * as types from '../types';

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

export const submitLogIn = ({ email, password }, dispatch) => {
  dispatch({ type: types.START_LOGIN_USER });
  return api()
    .post('/auth/sign_in', {
      email,
      password
    })
    .then((response) => {
      dispatch({
        type: types.SUCCESS_LOGIN_USER,
        payload: response.data.data
      });
      browserHistory.push('/');
    })
    .catch((error) => {
      dispatch({ type: types.ERROR_LOGIN_USER });
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
