import { useContext } from "react"
import { AuthContext } from "../context/context"

const Verification = () =>{
    const {verify} = useContext(AuthContext)
    return(
        <>
            <h1>Verification page</h1>
            <form onSubmit={verify}>
                <input type="text" name="verification" placeholder="Enter verification code"/>
                <button>Check</button>
            </form>
        </>
    )
}

export default Verification