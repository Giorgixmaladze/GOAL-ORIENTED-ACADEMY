import { useState } from "react";

const useForm = () => {
  const [info, setInfo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const infoObj = {};

    for (let [key, value] of data.entries()) {
      infoObj[key] = value;
    }

    setInfo(infoObj);
  };

  return [info, handleSubmit];
};

export default useForm;
