import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Dashboard, LogIn, SignUp } from './pages';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} onEnter={requireAuth} />
      <Route path="signup" component={SignUp} onEnter={redirectAuth} />
      <Route path="login" component={LogIn} onEnter={redirectAuth} />
    </Route>
  );
};
