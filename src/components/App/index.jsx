import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProductPage from '../../pages/AddProductPage';
import ShowProductsPage from '../../pages/ShowProductsPage';
import Header from '../Header';
import './style.css'

function App() {
  return (
    <div >
      <Header/>
      <Routes>
          <Route path='/' element={<AddProductPage/>}/>
          <Route path='/products' element={<ShowProductsPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
