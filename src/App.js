import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop'
import React from "react";
import Review from './components/Review/Review';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Invantory from './components/Invantory/Invantory';
import Notfound from './components/NotFound/NotFound';
import ProductDitall from './components/ProductDitall/ProductDitall';






function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <BrowserRouter>
      <Routes>
     <Route exect path='/shop' element={<Shop/>}></Route>
     <Route path='/review' element={<Review/>}></Route>
     <Route path='/manage' element={<Invantory/>}></Route>
     <Route path='/' element={<Shop/>} ></Route>
     <Route path='/product/:productkey' element={<ProductDitall/>} ></Route>
     <Route path='*' element={<Notfound/>} ></Route>
     
     </Routes>
       </BrowserRouter>
    
    
   
     
      
    </div>
  );
}

export default App;
