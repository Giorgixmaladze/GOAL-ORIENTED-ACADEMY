const Presentational = ({ handleSum }) => {
    return (
      <form action="" onSubmit={handleSum}>
        <input type="number" required name="num1" />
        <input type="number" required name="num2" />
        <button>Submit</button>
      </form>
    );
  };
  export default Presentational;
  //შექმენით კალულატორის პროექტი, სადაც გექნბათ 2 ინფუთი და ღილაკი, თქვენი დავალებაა ამ ორი ინფუთიდან წამოიღოთ რიცხვები და როცა ღილაკზე მოხდება დაკლიკება გამოიანგარიშოთ მათი ჯამი. მთავარი იდეა: გამოიყენეთ ახლანს ნასწავლი ნიმუში (Container and Presentational splitting) რომ გაამარტივოთ კოდი (აგრეთვე გამოიყენეთ State lifiting)
  