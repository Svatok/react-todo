import * as types from '../types';
import api from '../services/api';

export const addTask = ({name, projectId}) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_START });
  return api()
    .post(`/todos/${projectId}/items`, { name } )
    .then((response) => {
      dispatch({
        type: types.ADD_TASK_SUCCESS,
        payload: response.data
      });
    })
    .catch(() => {
      dispatch({ type: types.ADD_TASK_ERROR });
    });
};

export const startTaskEditing = id => (dispatch) => {
  return dispatch({ type: types.SET_EDITING_STATUS_TO_TASK, payload: id });
};

export const cancelTaskEditing = () => (dispatch) => {
  return dispatch({ type: types.UNSET_EDITING_STATUS_TO_TASK});
};

export const editTask = ({id, name, projectId, index}) => (dispatch) => {
  dispatch({ type: types.EDIT_TASK_START });
  return api()
    .put(`/todos/${projectId}/items/${id}`, { name })
    .then((response) => {
      dispatch({
        type: types.EDIT_TASK_SUCCESS,
        payload: {task: response.data, index}
      });
    })
    .catch(() => {
      dispatch({ type: types.EDIT_TASK_ERROR });
    });
};

export const removeTask = (id, projectId, index) => (dispatch) => {
  dispatch({ type: types.REMOVE_TASK_START });
  return api()
    .delete(`/todos/${projectId}/items/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_TASK_SUCCESS, payload: { projectId, index } });
    })
    .catch(() => {
      dispatch({ type: types.REMOVE_TASK_ERROR });
    });
};
