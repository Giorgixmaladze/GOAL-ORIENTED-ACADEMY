import { useEffect, useState } from "react"
import { getLocal, setLocal } from "./localstorage"

const login = (e,navigate) =>{
    e.preventDefault()

    let curUser = getLocal("curUser") || []
    
    
    const users = getLocal("users") || []
    const data = new FormData(e.target)
    let logged = getLocal("logged") || false
    let infoObj = {}
    for(let[key,value] of data.entries()){
        infoObj[key] = value;
    }

    if(users.some(user => user.email === infoObj.email && user.password === infoObj.password)){
        curUser = ([infoObj])
        alert("Succesfully logged")
        logged = true
        setLocal("curUser", curUser)
        setLocal("logged",logged)
        navigate("/")
    }else{
        logged = false
        setLocal("logged",logged)
    }

}

export default login