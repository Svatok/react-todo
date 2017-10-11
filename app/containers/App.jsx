import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/page_components/Navigation';
import Logo from '../components/page_components/Logo';
import Footer from '../components/page_components/Footer';
import Message from '../components/common_components/Message';
import Loader from '../components/common_components/Loader';
import { logOut } from '../actions/users';

const App = ({ children, user, logOutUser, fetching }) => {
  return (
    <div className="app">
      { fetching && <Loader /> }
      <Navigation user={user} logOutUser={logOutUser} />
      <Logo />
      <Message />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  fetching: state.request.fetching
});

const mapDispatchToProps = {
  logOutUser: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
