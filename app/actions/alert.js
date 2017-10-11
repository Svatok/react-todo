import * as types from '../types';

export const dismissAlert = () => (dispatch) => {
  return dispatch({type: types.REMOVE_ALERT});
};

export default { dismissAlert };
