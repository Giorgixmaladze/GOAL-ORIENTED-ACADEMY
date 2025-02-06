import { useEffect,useState } from "react";

function Signup(){
    const [users,setUsers] = useState([])
    const [signedUp,setSignedUp] = useState(false)


    const handleSubmit = (e) =>{
        e.preventDefault()
        const entered ={
            email: e.target.email.value,
            password: e.target.pass.value
        }


        
    }



    return(
        <>
            <form action="">
                <input type="email" name="email" required placeholder="Enter your email" />
                <input type="password" name="pass" required placeholder="Enter your password" />
                <button>Submit</button>
            </form>
        
        </>


    )


}