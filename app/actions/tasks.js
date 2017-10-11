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
    .catch((error) => {
      dispatch({ type: types.ADD_TASK_ERROR });
      showFormErrors(error.data);
    });
};

export const removeTask = (id, projectId, index) => (dispatch) => {
  dispatch({ type: types.REMOVE_TASK_START });
  return api()
    .delete(`/todos/${projectId}/items/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_TASK_SUCCESS, payload: { projectId, index } });
    })
    .catch((error) => {
      dispatch({ type: types.REMOVE_TASK_ERROR });
    });
};
