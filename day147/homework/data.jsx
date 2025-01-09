import { useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState({});

  function handleChange({ target }) {
    const { name, value } = target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <form action="">
        <input
          type="text"
          required
          name="firstname"
          placeholder="Enter your first name"
          onChange={handleChange}
        />
        <input
          type="text"
          required
          name="lastname"
          placeholder="Enter your last name"
          onChange={handleChange}
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <input
          type="number"
          required
          name="age"
          placeholder="Enter your age"
          onChange={handleChange}
        />
        <input
          type="password"
          required
          name="pass"
          placeholder="Enter your password"
        />
      </form>

      <p>Firstname: {data.firstname}</p>
      <p>Lastname: {data.lastname}</p>
      <p>Email: {data.email}</p>
      <p>Age: {data.age}</p>
    </>
  );
}

export default App;