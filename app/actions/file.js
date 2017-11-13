import { change } from 'redux-form';
import * as types from '../types';

export const addFile = data => (dispatch) => {
  dispatch({ type: types.ADD_FILE, payload: data.name });
};

export const removeFile = () => (dispatch) => {
  dispatch({ type: types.REMOVE_FILE });
  dispatch(change('newCommentForm', 'attachment', null));
};
