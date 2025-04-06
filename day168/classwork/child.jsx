import { useContext } from "react"
import { FirstContext, SecondContext } from "../context/context"

const Child = () => {
    const firstname = useContext(FirstContext)
    const lastname = useContext(SecondContext)

    return (
        <p>{firstname} {lastname}</p>
    )

}

export default Child