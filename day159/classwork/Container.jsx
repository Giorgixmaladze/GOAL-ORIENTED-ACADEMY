
import { useState } from "react";
import Presentational from "./Presentational";

const Container = () => {
  const [sum, setSum] = useState(0);

  const handleSum = (e) => {
    e.preventDefault();
    const num1 = Number(e.target.num1.value);
    const num2 = Number(e.target.num2.value);
    setSum(num1 + num2);
    e.target.reset();
  };

  return (
    <>
      <Presentational handleSum={handleSum} />;<p>{sum}</p>
    </>
  );
};
export default Container;
