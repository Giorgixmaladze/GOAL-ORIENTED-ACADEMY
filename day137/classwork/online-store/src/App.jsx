import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (name && releaseDate && price) {
      const newProduct = {
        id: Date.now(),
        name,
        releaseDate,
        price,
      };
      setProducts([...products, newProduct]);
      setReleaseDate('');
      setPrice('');
    } else {
      alert('please fill all fields :)');
    }
  };

  return (
    <div className="App">
      <h1>Online Store</h1>

      <div className="form-container">
        <h2>Add new product</h2>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>add</button>
      </div>


      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <h3>{product.name}</h3>
            <p>release-date:{product.releaseDate}</p>
            <p>price: {product.price}$</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;