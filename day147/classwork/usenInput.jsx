import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    let email = e.target.email.value;
    setData((prev) => {
      if (prev.includes(email)) {
        return prev.filter((item) => item != email);
      } else {
        return [...prev, email];
      }
    });
    e.target.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name="email"
          placeholder="Enter your name"
        />
        <button>Submit</button>
      </form>

      <ul>
        {data.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}
