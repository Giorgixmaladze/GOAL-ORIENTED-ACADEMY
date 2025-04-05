import { useContext } from "react"
import { AuthContext } from "../context/Context"
import useForm from "../hooks/useForm"
import { Link } from "react-router-dom"
const SignIn = () => {
    const handleSubmit = useForm()
    const {signIn} = useContext(AuthContext)
    return (
        <>
            <h1>Sign in page</h1>
            <form onSubmit={(e) => handleSubmit(e, signIn)}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Submit</button>
                <Link to="/signup">Don't have an account? Login</Link>
            </form>
        </>
    )
}

export default SignIn