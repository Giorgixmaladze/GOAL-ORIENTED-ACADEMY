import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

    const [signed, setSigned] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(signed))
    },[signed])
    const handleRegister = (e) => {
        e.preventDefault()

        const entered = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }


        if (signed.some((user) => user.email === entered.email)) {
            alert("Account with this email already registered!")
        } else {
            setSigned(prev => [...prev, entered])
            navigate("/login")
        }

    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="email" placeholder="Enter Your Email" name="email" required />
                <input type="password" placeholder="Enter Your Password" name="pass" required />
                <button>Submit</button>
                <a href="">Already have account? Log In</a>
            </form>

        </>
    )

}




export default Signup;