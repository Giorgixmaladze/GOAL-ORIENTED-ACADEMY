
import { useState, createContext, useEffect } from "react";
import { getLocal } from "../utils/localStorage";
import useCart from "../hooks/useCart";
import { preconnect } from "react-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, handleCart] = useCart(getLocal("cart") || [])




 

    const fetchData = async () => {
        try {
            const info = await fetch(`https://fakestoreapi.com/products`);
            const data = await info.json();
            setProducts(data);
            console.log(data)
        } catch {
            console.error("Error Fetching Data :(")
        }

    };

    const addProduct = (product, quantity = 1) => {
        const existing = cart.find(item => item.id === product.id);

        if (!existing) {
            return [...cart, { ...product, quantity }];
        }

        return cart.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
        );
    };

    const removeProduct = (product) => {

        return cart.filter(curValue => curValue.id !== product.id);
       
    }


    return (
        <AuthContext.Provider value={{ cart, fetchData, products, handleCart, addProduct, removeProduct}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;