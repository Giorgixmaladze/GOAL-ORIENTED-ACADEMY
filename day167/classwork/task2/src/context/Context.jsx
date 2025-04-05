import { Children, createContext, useEffect, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [account, setAccount] = useState(0)
    const [signed, setSigned] = useState(getLocal("signed") || false)
    const [logged, setLogged] = useState(getLocal("logged") || false)
    const [curUser,setCurUser] = useState(getLocal("curUser") || [])
    const navigate = useNavigate()
    useEffect(() => {
        setLocal("signed", signed)
    }, [signed])

    useEffect(() => {
        setLocal("logged", logged)
    }, [logged])
    useEffect(() =>{
        setLocal("curUser",curUser)
    },[curUser])

    const register = (formData) => {
        const accounts = getLocal("accounts") || []
        if (accounts.some(user => user.email === formData.email)) {
            return;
        } else {
            accounts.push(formData)
            setLocal("accounts", accounts)
            setSigned(true)
            navigate("/login")
        }

    }
    const signIn = (formData) => {
        const accounts = getLocal("accounts") || []
        if (accounts.some(user => user.email === formData.email && user.password === formData.password)) {
            setAccount(formData)
            setLogged(true)
            navigate("/")
            setCurUser([formData])
        } else {
            alert("Invalid password or email")
        }
    }

    const logOut = () =>{
        setCurUser([])
        setLogged(false)
        navigate("/login")
    }

    


    return (
        <AuthContext.Provider value={{ account, register, signIn,logOut }}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider