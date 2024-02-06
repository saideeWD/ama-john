import React from "react";
import { Navigate,} from "react-router-dom";
import Shipment from './../components/Shipment/Shipment';
import useAuth from './useAuth/useAuth';


const PrivateRoute = ({children}) => {
  const auth = useAuth; 

  
 

 

  return auth ? children : <Navigate to={'/login'}/>
    
};

export default PrivateRoute;