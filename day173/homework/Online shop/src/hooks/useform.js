import { useEffect, useState } from "react"
import { getLocal, setLocal } from "../utils/localStorage"
import { useNavigate, useParams } from "react-router-dom"

const useForm = () =>{
    const navigate = useNavigate()
    const [info,setInfo] = useState(getLocal("users") || [])
    const [signed,setSigned] = useState(getLocal("signed") || false)
    const [curUser,setCurUser] = useState(getLocal("curUser") || [])
    useEffect(()=>{
        setLocal("users",info)
        setLocal("signed",signed)
        setLocal("curUser",curUser)
    },[info,signed,curUser])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const infoObj = {isVerified:false,code:"1234"}
        const data = new FormData(e.target)
        for(let [key,value] of data.entries()){
            infoObj[key] = value
        }
        
        if(info.some(user => user.email === infoObj.email)){
            alert("Account with this email exists")
        }else{
            setInfo(prev => [...prev,infoObj])
            setSigned(true)
            setCurUser([infoObj])
            navigate(`/verification/${infoObj.email}`)
        }
    }


    return [info,handleSubmit]
}

export default useForm
