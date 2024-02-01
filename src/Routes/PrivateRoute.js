import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import Shipment from './../components/Shipment/Shipment';
import { UserContaxt } from './../App';

const PrivateRoute = ({children}) => {
  const [loggedInUser, setloggedInUser] = useContext(UserContaxt);
 

  if(loggedInUser==null){
    return <Navigate to={'/login'}/>
  }

  else if(Shipment){
    return <Shipment/>

  }

  return (
    <div>
   

  
    </div>
  );
};

export default PrivateRoute;