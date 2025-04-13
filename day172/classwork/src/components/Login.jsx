import login from "../utils/login"

const Login = () =>{
    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={login}>
                <input type="email" name="email" placeholder="Enter the email"/>
                <input type="password" name="password" placeholder="Enter the password" />
                <button>Login</button>
            </form>

        </>
    )
}

export default Login