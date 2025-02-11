import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ users}) {

    const navigate = useNavigate()
    const handleLogin = (e) =>{
        e.preventDefault()
        const entered ={
            email:e.target.email.value,
            pass:e.target.pass.value
        }
        if(users.some((acc) => acc.email ===entered.email && acc.pass === entered.pass)){
            navigate("/")
        }else{
            alert("Invalid Email or Password! Please try Again")

        }
    }


    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Enter Your Email" required name="email" />
                <input type="password" placeholder="Enter Your Email" required name="pass" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login