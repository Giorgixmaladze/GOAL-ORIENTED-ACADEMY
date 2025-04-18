import useForm from "../hooks/useform"

const Registration = () =>{
    const[info,handleSubmit] = useForm()
    return(
        <>
            <h1>Registration Page</h1>

            <form onSubmit={handleSubmit}>
                <input type="email"  name="email" placeholder="Enter the email" required/>
                <input type="password" name="password" placeholder="Enter the Password" required />
                <button>Sign Up</button>
            </form>
        </>
    )

}

export default Registration