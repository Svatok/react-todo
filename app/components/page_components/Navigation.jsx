import React from 'react';
import { Link } from 'react-router';

const Navigation = ({ user, logOutUser }) => {
    return (
      <div className="col-xs-8 col-xs-offset-2 navigation">
        { user.authenticated &&
          <div className="user-control pull-right">
            <Link
              onClick={logOutUser}
              className="btn btn-primary btn-xs logout"
              to="/"
            >
              Sign out
            </Link>
          </div>
        }
      </div>
    );
};

export default Navigation;
