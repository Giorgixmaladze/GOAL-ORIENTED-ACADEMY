import useForm from "../hooks/useForm"

const Register = () =>{
    const [info,handleSubmit] = useForm()

    return(
        <>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter the email"/>
                <input type="password" name="password" placeholder="Enter the password" />
                <button>Register</button>
            </form>
        
        </>
    )
}

export default Register