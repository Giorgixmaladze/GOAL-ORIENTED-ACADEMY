import React from 'react';
import ProductItem from './ProductItem';



function ProductList({ products }) {
  return (
    <ol>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ol>
  );
}

export default ProductList;
