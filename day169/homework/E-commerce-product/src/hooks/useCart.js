import { useState } from "react"
import { setLocal } from "../utils/localStorage"

const useCart = (initState) =>{
    const [cart,setCart] = useState(initState)

    const handleCart = (product,func,quantity) =>{
        let newList = func(product,quantity)
        setCart(newList)
        setLocal("cart",newList)
    }
    return [cart,handleCart]
}


export default useCart