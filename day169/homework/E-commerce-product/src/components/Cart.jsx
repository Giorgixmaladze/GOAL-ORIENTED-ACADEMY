import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Context"

const Cart = () => {
    const { cart, handleCart, removeProduct } = useContext(AuthContext)
    



    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalQuantity = cart.reduce((acc,item) => acc + item.quantity,0)
    return (
        <div id="container">
            <h1>Cart List</h1>
            {
                cart.map((product, index) => {
                    return (

                        <div className="product">
                            <img src={product.image} alt="" />
                            <h2>{product.title}</h2>
                            <h3>{product.category}</h3>
                            <p>{product.description}</p>
                            <p>Price : {product.price}$</p>
                            <p>Quantity : {product.quantity}</p>
                            <button onClick={() => handleCart(product, removeProduct)}>removeProduct</button>
                        </div>
                    )

                })
            }

            <h2>Total Summary</h2>
            <p>{total.toFixed(2)}$</p>
            <p>Total Amount: {totalQuantity}</p>
        </div>
    )
}

export default Cart