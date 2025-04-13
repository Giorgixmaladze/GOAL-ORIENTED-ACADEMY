import { useEffect, useState } from "react"
import { getLocal, setLocal } from "./localstorage"

const login = (e) =>{
    e.preventDefault()
    useEffect(() =>{
        setLocal("curUser",curUser)
    },[curUser])

    const [curUser,setCurUser] = useState(getLocal("curUser") || [])
    const users = getLocal("users") || []
    const data = new FormData(e.target)
    let infoObj = {}
    for(let[key,value] of data.entries()){
        infoObj[key] = value;
    }

    if(users.some(user => user.email === infoObj.email && user.password === infoObj.password)){
        setCurUser([infoObj])
        alert("Succesfully logged")
    }

    return;

}

export default login