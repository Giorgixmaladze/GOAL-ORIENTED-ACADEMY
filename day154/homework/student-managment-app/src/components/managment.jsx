import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Managment() {
    const [students,setStudents] = useState([])
    const [users,setUsers] = useState(()=> JSON.parse(localStorage.getItem("users")))
    const [curUser,setCurUser] = JSON.parse(localStorage.getItem("CurrentUser"))
    const navigate = useNavigate()
    


    useEffect(() =>{
        localStorage.setItem("students",JSON.stringify(students))
        localStorage.setItem("CurrentUser",JSON.stringify(curUser))
    },[students,curUser])


    

    const addStudent = (e) =>{
        e.preventDefault()

        const newStudent = {
            name:e.target.name.value,
            age:e.target.age.value,
            email:e.target.email.value
        }

        setStudents(prev => [...prev,newStudent])

    }

    const handleLogOut = () =>{
        navigate("/")
        setCurUser({})
    }
    

    return (
        <main>
            <form onSubmit={addStudent}>
                <input type="text" name="name" placeholder="Enter students name" required/>
                <input type="number" name="age" placeholder="Enter students age" required />
                <input type="email" name="email" placeholder="Enter students Email" required/>
                <button>Add student</button>
            </form>

            <table border= "1" >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student =>{
                            return(
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <button onClick={handleLogOut}>Log out</button>

        </main>
    )
}


export default Managment