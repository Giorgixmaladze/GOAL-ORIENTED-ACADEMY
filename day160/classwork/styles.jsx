import { useEffect, useState } from "react";

import "./styles.css";

const App = () => {
  const style = {
    backgroundColor: "black",
    color: "green",
  };

  return (
    <>
      <button style={{ backgroundColor: "red", color: "white" }}>
        Click Here
      </button>
      <button style={style}>Click Here</button>

      <p>Hello there</p>
    </>
  );
};
//შექმენით კალულატორის პროექტი, სადაც გექნბათ 2 ინფუთი და ღილაკი, თქვენი დავალებაა ამ ორი ინფუთიდან წამოიღოთ რიცხვები და როცა ღილაკზე მოხდება დაკლიკება გამოიანგარიშოთ მათი ჯამი. მთავარი იდეა: გამოიყენეთ ახლანს ნასწავლი ნიმუში (Container and Presentational splitting) რომ გაამარტივოთ კოდი (აგრეთვე გამოიყენეთ State lifiting)
export default App;
