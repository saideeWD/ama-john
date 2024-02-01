
import "./App.css";
import React, { createContext, useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import { router } from "./Routes/Router";
export const UserContaxt = createContext();

function App() {
  const [loggedInUser, setloggedInUser] = useState({});

  return (
    <UserContaxt.Provider value={[loggedInUser, setloggedInUser]}>
      <RouterProvider router={router}><MainLayout></MainLayout></RouterProvider>
     
     
    </UserContaxt.Provider>
  );
}

export default App;
