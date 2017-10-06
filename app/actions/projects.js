import * as types from '../types';
import api from '../services/api';

export const fetchProjects = () => (dispatch) => {
  dispatch({ type: types.FETCH_PROJECTS_START });
  return api()
    .get('/todos' )
    .then((response) => {
      let projects = {}
      response.data.forEach((project, index) => (
        projects[project.id] = project
      ));
      dispatch({
        type: types.FETCH_PROJECTS_SUCCESS,
        payload: projects
      });
    })
    .catch((error) => {
      dispatch({ type: types.FETCH_PROJECTS_ERROR });
      showFormErrors(error.data);
    });
};

export const newProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_START });
};

export const addProject = ({title}) => (dispatch) => {
  return api()
    .post('/todos', { title } )
    .then((response) => {
      dispatch({
        type: types.ADD_PROJECT_SUCCESS,
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({ type: types.ADD_PROJECT_ERROR });
      showFormErrors(error.data);
    });
};

export const removeProject = id => (dispatch) => {
  dispatch({ type: types.REMOVE_PROJECT_START });
  return api()
    .delete(`/todos/${id}` )
    .then(() => {
      dispatch({ type: types.REMOVE_PROJECT_SUCCESS, payload: id });
    })
    .catch((error) => {
      dispatch({ type: types.REMOVE_PROJECT_ERROR });
    });
};

export const cancelNewProject = () => (dispatch) => {
  dispatch({ type: types.ADD_PROJECT_CANCEL });
};
