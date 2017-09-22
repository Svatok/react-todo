import { combineReducers } from 'redux';
import * as types from '../types';

const initialState = {
  email: null,
  authenticated: false,
  fetched: false,
  fetching: false,
  id: null,
};


export default function user(state = initialState, {type, payload}) {
  switch (type) {
    case types.START_LOGIN_USER:
      return {
        ...state,
        authenticated: false,
        fetched: false,
        fetching: true
      };
    case types.SUCCESS_LOGIN_USER:
      return {
        ...state,
        ...payload,
        authenticated: true,
        fetched: true,
        fetching: false
      };
    case types.ERROR_LOGIN_USER:
      return {
        ...state,
        authenticated: false,
        fetched: false,
        fetching: false
      };
    case types.START_SIGNUP_USER:
      return {
        ...state,
        authenticated: false,
        fetched: false,
        fetching: true
      };
    case types.SUCCESS_SIGNUP_USER:
      return {
        ...state,
        ...payload,
        authenticated: true,
        fetched: true,
        fetching: false
      };
    case types.ERROR_SIGNUP_USER:
      return {
        ...state,
        authenticated: false,
        fetched: false,
        fetching: false
      };
    case types.START_LOGOUT_USER:
      return {
        ...state,
        authenticated: true,
        fetched: false,
        fetching: true
      };
    case types.SUCCESS_LOGOUT_USER:
      return {
        ...initialState
      };
    case types.ERROR_LOGOUT_USER:
      return {
        ...state,
        authenticated: true,
        fetched: false,
        fetching: false
      };
    default:
      return state;
  }
}
