import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);



  /**
   * პირველი ფუნქცია სახელად handleClick წარმოდგენილი გვაქვს ასინქრონული ფუნქცია აქ ორივე setter ფუნქციას
   * გადაეცა ერთი და იგივე მნიშვნელობები,მოცემული ფუნქციის შემთხვევაში, ერთი setter ფუნქცია როდესაც ეშვება მეორე არ ჩერდება და გადადის ეგრევე მეორე setter ფუნქციაზე, ამიტომ მნიშვნელობა შეიცვალა მხოლოდ ერთხელ რადგან
   * პირველი setter ფუნქციის გაშვების დროს მნიშვნელობა ჯერ არ იყო შეცვლილი
   */
  function handleClick() {
    setCount(count + 1);
    setCount(count + 1);
  }



/**
 * მეორე ფუნქცია სახელად handleCorrect წინა ფუნქციისგან შედარებით განსხვავებულია,აქ უკვე callback ფუნქციების საშუალებით setter ფუნქციებიც სხვანაირად მოქმედებს,ამ ფუნქციაში უკვე setter ფუნქცია ელოდება შიგნით გაშვებულ callback ფუნქციას და სანამ არ დასრულდება მისი მუშაობა მანამდე არ მოხდება შემდეგ ფუნქციაზე გადასვლა
 */
  
  function handleCorrect(){
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  console.log("re-render");
  
  return (
    <>
      <p>{count}</p>

      <button onClick={handleClick}>Update</button>

      <button onClick={handleCorrect}>Correct update</button>
    </>
  );
}
