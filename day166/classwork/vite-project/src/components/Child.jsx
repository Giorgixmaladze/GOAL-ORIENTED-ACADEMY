import { useContext } from "react"
import { AuthContext } from "../App"

const Child = () =>{
    const data = useContext(AuthContext)

    return(
        <>
        <h1>{data.email}</h1>
        <p>{data.pass}</p>
        </>
    )
}

export default Child