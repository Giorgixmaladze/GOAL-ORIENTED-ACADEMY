import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState(() => {
    const storedInfo = localStorage.getItem("Users");
    return storedInfo ? JSON.parse(storedInfo) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const infoObj = {};
    for (let [key, value] of data.entries()) {
      infoObj[key] = value;
    }
    e.target.reset();

    if (info.some((user) => user.email === infoObj.email)) {
      alert("Account with this email, already exists");
    } else {
      setInfo((prev) => [...prev, infoObj]);
      navigate("/login");
    }
  };

  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(info));
  }, [info]);

  return [info, handleSubmit];
};

export default useForm;
