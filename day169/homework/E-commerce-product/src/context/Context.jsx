
import { useState, createContext } from "react";
import { getLocal } from "../utils/localStorage";
import useCart from "../hooks/useCart";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart,handleCart] = useCart(getLocal("cart") || [])

    const fetchData = async () => {
        const info = await fetch(`https://fakestoreapi.com/products`);
        const data = await info.json();
        setProducts(data);
        console.log(data)
    };

    const addProduct = (product) =>{
        if(cart.filter(item =>item.id === product.id).length === 0){
            return[...cart,{...product,quantity:1}]
        }
        
        return cart.map(item =>{
            if(item.id === product.id){
                return[...cart,{...product,quantity:item.quantity + 1}]
            }
        })
        
    }

    return (
        <AuthContext.Provider value={{ fetchData, products,handleCart,addProduct }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;