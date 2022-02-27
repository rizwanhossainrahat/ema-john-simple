import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Error from './components/Error/Error'
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div >
          <Header></Header>
          <Router>
            <Routes>
             <Route path='/shop'element={<Shop/>}></Route>
             <Route path='/review' element={<Review/>}></Route>
             <Route path='/manage' element={<Inventory/>}></Route>
             <Route path='/' exact element={<Shop/>}></Route>
             <Route path='/product/:productKey'  element={<ProductDetail/>}></Route>
             <Route path='*' element={<Error/>}></Route>
            </Routes>
          </Router>
         
        
         

     
    </div>
  );
}

export default App;
