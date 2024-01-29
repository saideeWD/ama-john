import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import React, { createContext, useState } from "react";
import Review from "./components/Review/Review";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Invantory from "./components/Invantory/Invantory";
import Notfound from "./components/NotFound/NotFound";
import ProductDitall from "./components/ProductDitall/ProductDitall";
import Login from "./components/Login/Login";
import Shipment from "./components/Shipment/Shipment";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContaxt = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});

  return (
    <UserContaxt.Provider value={[loggedInUser, setloggedInUser]}>
      <h3> Email : {loggedInUser.email}</h3>
      <Header></Header>

      <BrowserRouter>
        <Routes>
          <Route exect path="/shop" element={<Shop />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/manage" element={<Invantory />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/product/:productkey"
            element={<ProductDitall />}
          ></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route
            path="/shipment"
            element={
              <PrivateRoute>
                <Shipment />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserContaxt.Provider>
  );
}

export default App;
