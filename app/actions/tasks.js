import {reset} from 'redux-form';
import {arrayMove} from 'react-sortable-hoc';
import * as types from '../types';
import api from '../services/api';

export const addTask = ({name, projectId, form}) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .post(`/todos/${projectId}/items`, { name })
    .then((response) => {
      dispatch({
        type: types.ADD_TASK_SUCCESS,
        payload: response.data
      });
      dispatch({ type: types.REQUEST_SUCCESS });
      dispatch(reset(form));
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const startTaskEditing = id => (dispatch) => {
  return dispatch({ type: types.SET_EDITING_STATUS_TO_TASK, payload: id });
};

export const cancelTaskEditing = () => (dispatch) => {
  return dispatch({ type: types.UNSET_EDITING_STATUS_TO_TASK});
};

export const editTask = ({id, name = null, done = null, deadline = null, projectId, index}) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  debugger;
  const params = {};
  if (name) {
    params.name = name;
  }
  if (done !== null) {
    params.done = done;
  }
  if (deadline !== null) {
    params.deadline = deadline;
  }
  return api()
    .put(`/todos/${projectId}/items/${id}`, { ...params })
    .then((response) => {
      dispatch({
        type: types.EDIT_TASK_SUCCESS,
        payload: {task: response.data, index}
      });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const removeTask = ({id, projectId, index}) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .delete(`/todos/${projectId}/items/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_TASK_SUCCESS, payload: { projectId, index } });
      dispatch({ type: types.ADD_SUCCESS, payload: 'Successful deleted!' });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const sortTask = ({oldIndex, newIndex}, items) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  const newItems = arrayMove(items, oldIndex, newIndex);
  return Promise.all(
    newItems.map((item, index) => {
      if (item.position !== index) {
        return api().put(`/todos/${item.todo_id}/items/${item.id}`, { position: index });
      }
      return null;
    })
  ).then(() => {
    dispatch({ type: types.REQUEST_SUCCESS });
    dispatch({ type: types.SORT_TASKS_SUCCESS, payload: {projectId: newItems[0].todo_id, newItems} });
  }).catch((error) => {
    dispatch({ type: types.REQUEST_ERROR });
    dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
  });
};
