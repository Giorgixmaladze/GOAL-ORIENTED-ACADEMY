import { useContext } from "react"
import { AuthContext } from "../context/Context"
import useForm from "../hooks/useForm"

const Register = () =>{
    const {register} = useContext(AuthContext)
    const handleSubmit = useForm()


    return(
        <>
            <h1>Registration Page</h1>
            <form onSubmit = {(e) =>handleSubmit(e,register)}>
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button>Submit</button>
            </form>
        </>
    )
}
export default Register