import { useNavigate } from "react-router-dom"
import login from "../utils/login"

const Login = () =>{
    const navigate = useNavigate()
    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={(e) => login(e,navigate)}>
                <input type="email" name="email" placeholder="Enter the email"/>
                <input type="password" name="password" placeholder="Enter the password" />
                <button>Log in</button>
            </form>
        </>
    )
}

export default Login