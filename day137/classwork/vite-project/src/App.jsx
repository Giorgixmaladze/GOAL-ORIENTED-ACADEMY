import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import styled from 'styled-components';


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (name, date, price) => {
    const newProduct = { id: Date.now(), name, date, price };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;

