import { useState, useEffect } from "react";

export default function App() {
  // შექმენით სტუდენტების სამართავი სისტემა,  ადმინს შეეძლება რეგისტრაცია და ავტორიზაცია, გამოიყენეთ ლოკალური ბაზა, როცა გაივლ;ის მოხმარებელი ავტორიზაციას უნდა ამოუგდოს ცხრილი და ფორმა, ფორმაში შეეძლება სტუდენტის დამატება, დამატებული სტუდენტი უნდა გამოჩნდეს ცხრილში, აგრეთვე ცხირლში უნდა იყოს 1 ღილაკი, წაშლა.
  const [user, setUser] = useState([]);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const [students, setStudent] = useState([]);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const handleRegister = (e) => {
    e.preventDefault();
    const newAcc = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };
    if (user.some((student) => student.email === newAcc.email)) {
      alert("Account already exists");
    }
    setUser((prev) => [...prev, newAcc]);
    
    setIsAuthorised(true);
    e.target.reset();
  };

  const handleLogIn = (e) => {
    e.preventDefault()
    const enteredAcc = {
      email:e.target.email.value,
      pass:e.target.pass.value
    }

    const loggedIn = user.find(acc => acc.email = enteredAcc.email && acc.password === enteredAcc.pass)
    if(!loggedIn){
      alert("Invalid email or password please try again")
      return;
    }
    setIsloggedIn(loggedIn)
    e.target.reset()
  
  };



  const addStudent = (e) =>{
    e.preventDefault()

    const newStudent = {
      name: e.target.name.value,
      email:e.target.email.value,
      age:e.target.age.value
    }

  setStudent(prev => [...prev, newStudent])
    e.target.reset()
  }
  

  return (
    <main>
      { !isAuthorised ?(
      <>
        <h1> Register</h1>
        <form onSubmit={handleRegister}>
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="pass" />
          <button>Register</button>
        </form>
      </>
        
      ) : isLoggedIn? (
        <>
          <form onSubmit={addStudent}>
            <input type = "text" placeholder="name" name="name" />
            <input type = "email" placeholder="email" name="email" />
            <input type = "number" placeholder="age" name="age" />
            <button>Add student</button>
          </form>

          <table border= "1">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>

            <tbody>
              {
                students.map(student =>{
                  return(
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.age}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>

        </>
        
      ): (
      <>
        <h1>Log In</h1> 
          <form onSubmit={handleLogIn}>
            <input type="text" placeholder="Email" name="email" />
            <input type="password" placeholder = "Password" name = "pass" />
            <button>Log In</button>
          </form>
      </>
      )}
     
        
      
    </main>
  );
}
