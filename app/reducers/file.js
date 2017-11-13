import * as types from '../types';

const initialState = {
  fileName: null
};

export default function file(state = initialState, {type, payload}) {
  switch (type) {
    case types.ADD_FILE:
      return {
        ...state,
        fileName: payload
      };
    case types.REMOVE_FILE:
      return {
        ...state,
        fileName: null
      };
    default:
      return state;
  }
}
