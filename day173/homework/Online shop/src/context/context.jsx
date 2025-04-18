import { createContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const [info,setInfo] = useState([])
    const curUser = getLocal("curUser") || []
    useEffect(() =>{
        setLocal("curUser",curUser)
    },[curUser])
    
    const navigate = useNavigate()
    const verify = (e) =>{
        e.preventDefault()
        const userCode = e.target.verification.value;
        if(curUser[0].code === userCode){
            navigate("/login")
            curUser[0].isVerified = true
            delete curUser[0].code
        }else{
            alert("Incorrect verification code, try again")
        }
    }


    const fetchData = async () =>{
        try{
            const data = await fetch(`https://fakestoreapi.com/products`)
            const res = await data.json()
            setInfo(res)
        }catch{
            console.error("Error Fetching Data")
        }
    }

    const removeProduct = (index) =>{
        const updated = info.filter((_,i) => index !== i)
        setInfo(updated)
    }

    return(
        <AuthContext.Provider value={{verify,fetchData,info,removeProduct}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider