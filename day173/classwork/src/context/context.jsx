import { createContext, use, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localstorage";

export const AuthContext = createContext()

const AuthProvider =({children}) =>{
    const [products,setProducts] = useState(getLocal("products") || [])
    useEffect(() =>{
        setLocal("products",products)
    },[])
    const addProduct = (e) =>{
        e.preventDefault()
        const product = e.target.product.name;
        if(products.some(item => product === item)){
            alert("This product already in")
        }else{
            setProducts(prev => [...prev,product])
        }
    }
    const deleteProduct = (index) =>{
        const updated = products.filter((_,i) => i!== index)
        setProducts(updated)
    } 

    return(
        <AuthContext.Provider value={{products,addProduct,deleteProduct}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider