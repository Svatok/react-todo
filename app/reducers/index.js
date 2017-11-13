import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from './user';
import dashboard from './dashboard';
import comments from './comments';
import alert from './alert';
import request from './request';
import file from './file';

const rootReducer = combineReducers({
  form: formReducer,
  user,
  alert,
  routing,
  dashboard,
  comments,
  request,
  file
});

export default rootReducer;
