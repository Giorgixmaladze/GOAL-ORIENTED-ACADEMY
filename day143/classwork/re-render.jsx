import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("re-render");
  });

  return (
    <>
      <button onClick={() => setName("Giorgaa")}>change name</button>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
}