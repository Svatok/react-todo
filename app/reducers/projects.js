import { combineReducers } from 'redux';
// import { List, Map } from 'immutable';
import * as types from '../types';

const initialState = {
  fetched: false,
  fetching: false,
  projects: [],
  project: null,
  projectNew: false
};

export default function projects(state = initialState, {type, payload}) {
  switch (type) {
    case types.FETCH_PROJECTS_START:
      return {
        ...state,
        fetched: false,
        fetching: true
      };
    case types.FETCH_PROJECTS_SUCCESS:
     return {
       ...state,
       fetched: true,
       fetching: false,
       jobs: payload.projects
     };
   case types.FETCH_PROJECTS_ERROR:
    return {
      ...state,
      fetched: false,
      fetching: false
    };
    case types.ADD_PROJECT_START:
      return {
        ...state,
        projectNew: true
      };
    case types.ADD_PROJECT_SUCCESS:
     return {
       ...state,
       projects: projects.push(action.payload),
       projectNew: false
     };
   case types.ADD_PROJECT_CANCEL:
    return {
      ...state,
      projectNew: false
    };
    case types.SAVE_PROJECT_START:
      return {
        ...state,
        job: null
      };
    case types.SAVE_PROJECT_SUCCESS:
     return {
       ...state,
       job: payload.project
     };
   case types.SAVE_PROJECT_ERROR:
    return {
      ...state,
      job: null
    };
   default:
    return state;
  }
}
