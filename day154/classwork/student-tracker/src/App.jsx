import { useState,useEffect } from 'react'

/**
 * 
 * 1) შექმენით სტუდენტების სამართავი სისტემა,  ადმინს შეეძლება რეგისტრაცია და ავტორიზაცია, გამოიყენეთ ლოკალური ბაზა, როცა გაივლ;ის მოხმარებელი ავტორიზაციას უნდა ამოუგდოს ცხრილი და ფორმა, ფორმაში შეეძლება სტუდენტის დამატება, დამატებული სტუდენტი უნდა გამოჩნდეს ცხრილში, აგრეთვე ცხირლში უნდა იყოს 1 ღილაკი, წაშლა.
 */


function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthorised,setAuthorised] = useState(false)

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);




  const handleLogin = (e) => {
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAddStudent = () => {
    if (name && email) {
      const newStudent = { name, email };
      const updatedStudents = [...students, newStudent];
      setStudents(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      setName('');
      setEmail('');
    } else {
      alert('Please enter both name and email');
    }
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };


  if(!isAuthorised){
    return (
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }


  


  


  return (
    <div className="App">
      <h1>Student Management System</h1>
      <div className="student-form">
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>
                <button onClick={() => handleDeleteStudent(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

