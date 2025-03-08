import { useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import { Link } from "react-router-dom";
const Signup = () => {
  const [data, setData] = useForm();
  const [signed,setSigned] = useState(false)

  useEffect(()=>{
    setSigned(true)
    localStorage.setItem("Signed",signed)
  },[data])
  return (
    <>
      <h1>Registration Page</h1>
      <form onSubmit={setData}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter new password"
          required
        />
        <button>Sign Up</button>
        <Link to="/login">Already Have an Account? Log In</Link>
      </form>
    </>
  );
};
export default Signup;
