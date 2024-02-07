import React, { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { UserContaxt } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);
  const location = useLocation();

  if (!loggedInUser.email) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;

}

 


export default PrivateRoute;
