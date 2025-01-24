import { useState,useEffect } from "react";
import Register from "./RegistrationPage";
import { useNavigate } from "react-router-dom";



function Login(){
    const [loggedIn,setloggedIn] = useState(false)
    const [users,setUsers] = useState([])


    const navigate = useNavigate()
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users"));
        if (storedUsers) {
            setUsers(storedUsers);
        }
    }, []);
    

    const handleLogin = (e) =>{
        e.preventDefault()

        const entered = {
            email:e.target.email.value,
            password: e.target.pass.value
        }

        const logged = users.find(user => user.email === entered.email && user.password === entered.password)
        if(logged){
            alert("sfg")
            navigate('/management')
        }else{
            alert("inass")
        }
 
    } 

    console.log(users)


    return(
        <main>
            
                <>
                    <h1>LogIn page</h1>
                    <form onSubmit={handleLogin} >
                        <input type="email" name="email" placeholder="Enter Your Email" />
                        <input type="password" name="pass" placeholder="Enter Your Password" />
                        <button>Submit</button>
                    </form>
                </>
            
            


        </main>



    )


}


export default Login