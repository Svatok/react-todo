import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOut } from '../actions/users';

const Navigation = ({ user, logOutUser }) => {
    return (
      <div className="col-xs-8 col-xs-offset-2 navigation">
        { user.authenticated &&
          <div className="user-control pull-right">
            <Link
              onClick={logOutUser}
              className='btn btn-primary btn-xs logout'
              to="/"
            >
              Sign out
            </Link>
          </div>
        }
      </div>
    );
};

Navigation.propTypes = {
  user: PropTypes.object,
  logOutUser: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  logOutUser: logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);


// <nav className='navigation' role="navigation">
//     { user.authenticated ? (
//       <Link
//         onClick={logOut}
//         className='item' to="/">Logout</Link>
//     ) : (
//       <Link className='item' to="/login">Log in</Link>
//     )}
//   <Link className='item' to="/signup">Sign Up</Link>
//   <Link className='item' to="/dashboard">Dashboard</Link>
//   <Link to="/about" className='item' activeClassName='active'>About</Link>
// </nav>
