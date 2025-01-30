import { useState,useEffect } from "react";
import Register from "./RegistrationPage";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css"



function Login({curUs}){
 
    const [users,setUsers] = useState([])
    const [curUser,setCurUser] = useState([])


    const navigate = useNavigate()
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        
        const curUus = JSON.parse(localStorage.getItem("CurrentUser"))
        setUsers(storedUsers);
        setCurUser(curUus)
    }, []);
    

    useEffect(() =>{
        localStorage.setItem("CurrentUser", JSON.stringify(curUser))
    },[curUser])

    console.log(curUser)




    const handleLogin = (e) =>{
        e.preventDefault()

        const entered = {
            email:e.target.email.value,
            password: e.target.pass.value
        }

        const logged = users.find(user => user.email === entered.email && user.password === entered.password)
        if(logged){
            const exists = users.findIndex(user => user.email === entered.email && user.password == entered.password)
            if(exists === -1){
                alert("Sdvds")
            }else{
                setCurUser(users[exists])
            }


            navigate('/management')
         
          
        }else{
            alert("Invalid Email or Password")
        }
 
    } 

    
    

    return(
        <main>
            
                <div id="login-box">
                    <h1>Goal Oriented Academy Log In page</h1>
                    <form onSubmit={handleLogin} >
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <input type="password" name="pass" placeholder="Enter Your Password" />
                        <button>Submit</button>
                        <Link to="/">Don't have account? Register</Link>
                    </form>

                </div>
            
            


        </main>



    )


}


export default Login