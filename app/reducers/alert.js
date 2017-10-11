import * as types from '../types';

const initialState = {
  style: null,
  message: null
};

export default function alert(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ERROR:
      return {
        ...state,
        style: 'danger',
        message: action.payload
      };
    case types.ADD_SUCCESS:
      return {
        ...state,
        style: 'success',
        message: action.payload
      };
    case types.REMOVE_ALERT:
      return initialState;
    default:
      return state;
  }
}
