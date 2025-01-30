import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./registration.css"
import { use } from "react";
function Register({us,curUs}) {

    const [users, setUsers] = us
    const [curUser, setCurUser] = curUs

    const navigate = useNavigate();

    useEffect(() => {

       
        localStorage.setItem("users", JSON.stringify(users));
       
        localStorage.setItem("CurrentUser", JSON.stringify(curUser))

    }, [users, curUser]);



    useEffect(() =>{
        const users = JSON.parse(localStorage.getItem("users"))

        setUsers(users)
    },[])

    const handleRegister = (e) => {
        e.preventDefault();

        const enteredAcc = {
            name:e.target.name.value,
            surname:e.target.surname.value,
            email: e.target.email.value,
            password: e.target.password.value ,
            role:e.target.role.value
        };



        if (users.some((user) => user.email === enteredAcc.email)) {
            alert("Account with this email already exists");
        } else {

            setUsers((prev) => [...prev, enteredAcc]);
            setCurUser([enteredAcc])

            setTimeout(() => {
                alert("Registration successful!");
                navigate("/login");
            }, 0);
        }

    };

    return (
        <main>
            <div id="container">

                <h1>Goal Oriented Academy Registration Page</h1>
                <form onSubmit={handleRegister}>

                    <input type="text" name="name" placeholder="Enter your name" />
                    <input type="text" name="surname" placeholder="Enter your surname" />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your Password"
                        required
                    />
                    <select name="role">
                        <option value="Leader">Leader</option>
                        <option value="Mini-Leader">Mini-Leader</option>
                        <option value="Mentor's-Assistant">Mentors Assistent</option>
                        <option value="Mentor">Mentor</option>
                    </select>


                    <button type="submit">Submit</button>
                    <Link to="/login">Already have account? Log in</Link>
                </form>


            </div>

        </main>
    );
}

export default Register;
