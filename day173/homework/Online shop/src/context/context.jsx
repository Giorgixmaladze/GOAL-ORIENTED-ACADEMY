import { createContext, useEffect } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{
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

    return(
        <AuthContext.Provider value={{verify}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider