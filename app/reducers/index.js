import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from '../reducers/user';
import projects from '../reducers/projects';
import message from '../reducers/message';
import request from '../reducers/request';

const rootReducer = combineReducers({
  form: formReducer,
  user,
  message,
  routing,
  projects,
  request
});

export default rootReducer;
