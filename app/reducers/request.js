import * as types from '../types';

const initialState = {
  fetched: false,
  fetching: false
};

export default function request(state = initialState, {type}) {
  switch (type) {
    case types.REQUEST_START:
      return {
        ...state,
        fetched: false,
        fetching: true
      };
    case types.REQUEST_SUCCESS:
      return {
        ...state,
        fetched: true,
        fetching: false,
      };
    case types.REQUEST_ERROR:
      return {
        ...state,
        fetched: false,
        fetching: false
      };
    default:
      return state;
  }
}
