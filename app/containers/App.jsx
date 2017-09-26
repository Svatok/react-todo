import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../containers/Navigation';
import Logo from '../containers/Logo';
import Footer from '../containers/Footer';
import Message from '../containers/Message';


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */
const App = ({ children }) => {
  return (
    <div className='app'>
      <Navigation />
      <Logo />
      <Message />
      <div className='container'>
        {children}
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
