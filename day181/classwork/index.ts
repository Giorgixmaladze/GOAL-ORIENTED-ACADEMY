// შექმენით თამაშის კოდის ნაწილი, სადაც მომხმარებელი ირჩევს 3 შესაძლო თამაშის მოდიდან ერთ-ერთს, გამოიყენეთ enum_ი

// enum GameModes{
//     EASY,
//     MEDIUM,
//     HARD
// }

// const userChoice:GameModes = GameModes.MEDIUM

// console.log(userChoice)



// შექმენით თამაშის რეგისტრაცია სადაც მომხმარებელი იორჩევს პერსონაჟის სახელს გამოიოყენეთ enum + მომხმარებელმა უნდა აირჩიოს როლი (ადმინი, მოდერატორი ან მოთამაშე), აგრეთვე შემოაქვს username და password



enum CharacterNames {
    MAIN = "Luka",
    SIDE = "Lile",
    ANTAGONIST = "Nia"
}

enum Roles {
    "admin",
    "moderator",
    "player"
}



const form = document.querySelector("form") as HTMLFormElement;


form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  const target = e.target as HTMLFormElement;
  const roleInput = (target.elements.namedItem("role") as HTMLSelectElement).value;
  const nameInput = (target.elements.namedItem("player") as HTMLSelectElement).value
  const username = (target.elements.namedItem("username") as HTMLInputElement).value 
  const pass = (target.elements.namedItem("pass") as HTMLInputElement).value
  let x = ""
  for(let i of pass){
    x += "*"
  }
console.log("Role:", roleInput);
console.log("Name:", nameInput);
console.log("Username:", username);
console.log("Pass:",x )
  
});