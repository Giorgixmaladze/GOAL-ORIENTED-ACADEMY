import { getLocal, setLocal } from "./localStorage"

const login = (e,navigate) =>{
    e.preventDefault()
    let infoObj = {isVerified:false,code:"1234"}
    let curUser = getLocal("curUser") || []
    const users = getLocal("users") || []
    let logged = false
    const data = new FormData(e.target)

    for(let [key,value] of data.entries()){
        infoObj[key] = value
    }
    if(users.some(user => user.email === infoObj.email && user.password === infoObj.password)){
        logged = true
        curUser = [infoObj]
        navigate('/')
        setLocal("curUser",curUser)
        setLocal("logged", logged)
    }else{
        alert("invalid")
        logged = false
        setLocal("logged",logged)
    }
}

export default login