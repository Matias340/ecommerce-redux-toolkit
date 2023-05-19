import React from 'react';
import { CarritoPage } from './component/carrito/CarritoPage';
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
import { Product } from './component/product/Product';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from './component/footer/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#F3F3F3' }}>
      <ToastContainer />
      <Navbar />
    <Routes> 
      <Route path='/' element={<Product />} />
      <Route path='/carrito' element={<CarritoPage />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
