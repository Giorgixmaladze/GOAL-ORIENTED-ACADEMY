import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () =>{
    const acc = JSON.parse(localStorage.getItem("Users"))
    const navigate = useNavigate()
    const login = (e) =>{
        e.preventDefault()
        const entered = {
            email:e.target.email.value,
            password:e.target.password.value
        }

        if(acc.some(user => user.email === entered.email && user.password === entered.password)){
            navigate("/")
        }else{
            alert("Invalid Email or password. Please try again")
        }
    }



    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <input type="email" name="email" placeholder="Enter your email" required/>
                <input type="password" name="password" placeholder="Enter the password" required/>
                <button>LogIn</button>
                <Link to="/signup">Don't have an account? Sign up</Link>
            </form>
        </>
    )
}
export default Login