import React from 'react';
import { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContaxt } from './../../App';

const PrivateRoute = ({children,...rest}) => {

  const [loggedInUser,setloggedInUser] = useContext(UserContaxt)
  return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;