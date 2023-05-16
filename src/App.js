import React from 'react';
import './App.css';
import { Product } from './component/product/Product';
import { Card } from './component/header/Card';

function App() {
  return (
    <div className="App">
      <Product/>
      <Card />
    </div>
  );
}

export default App;
