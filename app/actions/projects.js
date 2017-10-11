import * as types from '../types';
import api from '../services/api';

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: types.FETCH_PROJECTS_START });
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
    })
    .catch(() => {
      dispatch({ type: types.FETCH_PROJECTS_ERROR });
    });
};

export const newProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_START });
};

export const addProject = ({title}) => (dispatch) => {
  return api()
    .post('/todos', { title })
    .then((response) => {
      dispatch({
        type: types.ADD_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(() => {
      dispatch({ type: types.ADD_PROJECT_ERROR });
    });
};

export const startProjectEditing = id => (dispatch) => {
  return dispatch({ type: types.SET_EDITING_STATUS_TO_PROJECT, payload: id });
};

export const cancelProjectEditing = () => (dispatch) => {
  return dispatch({ type: types.UNSET_EDITING_STATUS_TO_PROJECT});
};

export const editProject = ({id, title}) => (dispatch) => {
  dispatch({ type: types.EDIT_PROJECT_START });
  return api()
    .put(`/todos/${id}`, { title })
    .then((response) => {
      dispatch({
        type: types.EDIT_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch(() => {
      dispatch({ type: types.EDIT_PROJECT_ERROR });
    });
};

export const removeProject = id => (dispatch) => {
  dispatch({ type: types.REMOVE_PROJECT_START });
  return api()
    .delete(`/todos/${id}`)
    .then(() => {
      dispatch({ type: types.REMOVE_PROJECT_SUCCESS, payload: id });
    })
    .catch(() => {
      dispatch({ type: types.REMOVE_PROJECT_ERROR });
    });
};

export const cancelNewProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_CANCEL });
};
