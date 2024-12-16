import React from "react";

function ProductCard({name, price, description}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}


export default ProductCard;