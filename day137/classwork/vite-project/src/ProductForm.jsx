import React, { useState } from 'react';



function ProductForm({ addProduct }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(name, date, price);
    setName('');
    setDate('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button type="submit">Add Product</Button>
    </form>
  );
}

export default ProductForm;
