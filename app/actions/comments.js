import { reset } from 'redux-form';
import { removeFile } from './file';
import * as types from '../types';
import api from '../services/api';

export const fetchComments = (projectId, taskId) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .get(`/todos/${projectId}/items/${taskId}/comments`)
    .then((response) => {
      const comments = {};
      response.data.forEach(comment => (
        comments[comment.id] = comment
      ));
      dispatch({
        type: types.FETCH_COMMENTS_SUCCESS,
        payload: comments
      });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const addComment = ({projectId, taskId, commentText, attachment}, dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .post(`/todos/${projectId}/items/${taskId}/comments`, { comment_text: commentText, attachment }, { multipart: true })
    .then((response) => {
      dispatch({
        type: types.ADD_COMMENT_SUCCESS,
        payload: response.data
      });
      dispatch(removeFile());
      dispatch(reset('newCommentForm'));
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const removeComment = (projectId, taskId, id) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .delete(`/todos/${projectId}/items/${taskId}/comments/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_COMMENT_SUCCESS, payload: id });
      dispatch({ type: types.REQUEST_SUCCESS });
      dispatch({ type: types.ADD_SUCCESS, payload: 'Successful deleted!' });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};
