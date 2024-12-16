import React from "react";
import ProductCard from "./ProductCard";
function ProductsList({products}) {
    return(
        <div className="products-list">
            {products.map((product) => (
                <ProductCard key={product.key} name = {product.name} price = {product.price} description = {product.description} />
            ))}
        </div>
    )
}


export default ProductsList;