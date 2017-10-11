import * as types from '../types';
import api from '../services/api';

export const addTask = ({name, projectId}) => (dispatch) => {
  dispatch({ type: types.ADD_TASK_START });
  return api()
    .post(`/todos/${projectId}/items`, { name })
    .then((response) => {
      dispatch({
        type: types.ADD_TASK_SUCCESS,
        payload: response.data
      });
      // dispatch(reset(formName));
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

export const editTask = ({id, name = null, done = null, projectId, index}) => (dispatch) => {
  dispatch({ type: types.EDIT_TASK_START });
  const params = {};
  if (name) {
    params.name = name;
  }
  if (done !== null) {
    params.done = done;
  }
  return api()
    .put(`/todos/${projectId}/items/${id}`, { ...params })
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

export const removeTask = ({id, projectId, index}) => (dispatch) => {
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
