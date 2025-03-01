import { useEffect, useState } from "react";
import LightMode from "./componets/Component1";
import RedMode2 from "./componets/Component2";

import "./styles.css";

const App = () => {
  return (
    <>
      <LightMode />
      <RedMode2 />
    </>
  );
};
//შექმენით კალულატორის პროექტი, სადაც გექნბათ 2 ინფუთი და ღილაკი, თქვენი დავალებაა ამ ორი ინფუთიდან წამოიღოთ რიცხვები და როცა ღილაკზე მოხდება დაკლიკება გამოიანგარიშოთ მათი ჯამი. მთავარი იდეა: გამოიყენეთ ახლანს ნასწავლი ნიმუში (Container and Presentational splitting) რომ გაამარტივოთ კოდი (აგრეთვე გამოიყენეთ State lifiting)
export default App;
