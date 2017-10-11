import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/page_components/Navigation';
import Logo from '../components/page_components/Logo';
import Footer from '../components/page_components/Footer';
import AlertMessage from '../components/common_components/AlertMessage';
import Loader from '../components/common_components/Loader';
import { logOut } from '../actions/users';
import { dismissAlert } from '../actions/alert';

const App = ({ children, user, logOutUser, fetching, dismissAlert, alert }) => {
  return (
    <div className="app">
      { alert.message &&
        <AlertMessage
          message={alert.message}
          bsStyle={alert.style}
          onDismiss={() => dismissAlert()}
        />
      }
      { fetching && <Loader /> }
      <Navigation user={user} logOutUser={logOutUser} />
      <Logo />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  alert: state.alert,
  fetching: state.request.fetching
});

const mapDispatchToProps = {
  logOutUser: logOut,
  dismissAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
