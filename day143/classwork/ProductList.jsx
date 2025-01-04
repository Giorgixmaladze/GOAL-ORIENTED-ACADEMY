import React, { useEffect, useState } from "react";

function ProductList(){
    const [products,setProducts] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]

)

    return(

        <>
            <ul>
                {
                    products.map((product) => {
                        return(
                            <li key={product.id}>{product.title}</li>
                        )
                    })
                }
            </ul>
        
        </>
    )
}

export default ProductList
