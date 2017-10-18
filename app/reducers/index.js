import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import user from '../reducers/user';
import dashboard from '../reducers/dashboard';
import alert from '../reducers/alert';
import request from '../reducers/request';

const rootReducer = combineReducers({
  form: formReducer,
  user,
  alert,
  routing,
  dashboard,
  request
});

export default rootReducer;
