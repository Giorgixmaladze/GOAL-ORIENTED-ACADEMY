import { useContext } from "react"
import { getLocal } from "../utils/localStorage"
import { AuthContext } from "../context/Context"

const AdminPanel = () => {
    const info = getLocal("accounts") || []
    const {logOut} = useContext(AuthContext)
    return (
        <>
            <h1>Admin Panel</h1>
            <button onClick={logOut}>Log out</button>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map(user =>{
                            return(
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default AdminPanel