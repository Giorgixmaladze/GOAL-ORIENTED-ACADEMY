import { createContext, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";

export const AuthContext = createContext()


const AuthProvider = () =>{
    const[account,setAccount] = useState(0)

    const register = (formData) =>{
        const accounts = getLocal("accounts") || []
        if(accounts.some(user => user.email === formData.email)){
            return;
        }else{
            accounts.push(formData)
            setLocal("accounts",accounts)
        }
    }
    const signIn = (formData) =>{
        const accounts = getLocal("accounts") || []
        if(accounts.some(user => user.email === formData.email && user.password === formData.password)){
            setAccount(formData)
        }
    }
    return(
        <AuthContext.Provider value={{account,register,signIn}}>
            {children}
        </AuthContext.Provider>
    )
    
}