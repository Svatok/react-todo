import * as types from '../types';
import api from '../services/api';

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .get('/todos')
    .then((response) => {
      const projects = {};
      response.data.forEach(project => (
        projects[project.id] = project
      ));
      dispatch({
        type: types.FETCH_PROJECTS_SUCCESS,
        payload: projects
      });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const addProject = ({title}) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .post('/todos', { title })
    .then((response) => {
      dispatch({
        type: types.ADD_PROJECT_SUCCESS,
        payload: response.data
      });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const startProjectEditing = id => (dispatch) => {
  return dispatch({ type: types.SET_EDITING_STATUS_TO_PROJECT, payload: id });
};

export const cancelProjectEditing = () => (dispatch) => {
  return dispatch({ type: types.UNSET_EDITING_STATUS_TO_PROJECT});
};

export const editProject = ({id, title}) => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .put(`/todos/${id}`, { title })
    .then((response) => {
      dispatch({
        type: types.EDIT_PROJECT_SUCCESS,
        payload: response.data
      });
      dispatch({ type: types.REQUEST_SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};

export const removeProject = id => (dispatch) => {
  dispatch({ type: types.REQUEST_START });
  return api()
    .delete(`/todos/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_PROJECT_SUCCESS, payload: id });
      dispatch({ type: types.REQUEST_SUCCESS });
      dispatch({ type: types.ADD_SUCCESS, payload: 'Successful deleted!' });
    })
    .catch((error) => {
      dispatch({ type: types.REQUEST_ERROR });
      dispatch({ type: types.ADD_ERROR, payload: error.data.errors[0] });
    });
};
