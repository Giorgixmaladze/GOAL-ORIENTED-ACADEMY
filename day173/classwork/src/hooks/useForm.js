import { useEffect, useState } from "react"
import { getLocal, setLocal } from "../utils/localstorage"
import { useNavigate } from "react-router-dom"

const useForm = () => {
    const [info,setInfo] = useState(getLocal("users") || [])
    const [signed,setSigned] = useState(getLocal("signed") || false)
    const navigate = useNavigate()
    useEffect(() =>{
        setLocal("users",info)
        setLocal("signed",signed)
    },[info,signed])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = new FormData(e.target)
        let infoObj = {}
        
        for(let [key,value] of data.entries()){
            infoObj[key] = value
        }

        if(info.some(user => user.email === infoObj.email)) {
            alert("Account with this email already exists")
        }else{
            setInfo(prev => [...prev,infoObj])
            navigate('/')
            setSigned(true)
        }
    }
    return [info,handleSubmit]
}

export default useForm