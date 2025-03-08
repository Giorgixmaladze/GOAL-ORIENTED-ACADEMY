import { useEffect, useState } from "react";
import Signup from "./Signup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import Management from "./management";

function App() {
  const navigate = useNavigate()
  const signedUp = JSON.parse(localStorage.getItem("Signed"))
  useEffect(() => {
    if (!signedUp) {
      navigate('/signup')
    }else{
      navigate("/login")
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Management />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;