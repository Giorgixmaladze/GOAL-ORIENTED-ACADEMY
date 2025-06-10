"use strict";
// შექმენით თამაშის კოდის ნაწილი, სადაც მომხმარებელი ირჩევს 3 შესაძლო თამაშის მოდიდან ერთ-ერთს, გამოიყენეთ enum_ი
// enum GameModes{
//     EASY,
//     MEDIUM,
//     HARD
// }
// const userChoice:GameModes = GameModes.MEDIUM
// console.log(userChoice)
// შექმენით თამაშის რეგისტრაცია სადაც მომხმარებელი იორჩევს პერსონაჟის სახელს გამოიოყენეთ enum + მომხმარებელმა უნდა აირჩიოს როლი (ადმინი, მოდერატორი ან მოთამაშე), აგრეთვე შემოაქვს username და password
var CharacterNames;
(function (CharacterNames) {
    CharacterNames["MAIN"] = "Luka";
    CharacterNames["SIDE"] = "Lile";
    CharacterNames["ANTAGONIST"] = "Nia";
})(CharacterNames || (CharacterNames = {}));
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["moderator"] = 1] = "moderator";
    Roles[Roles["player"] = 2] = "player";
})(Roles || (Roles = {}));
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target;
    const roleInput = target.elements.namedItem("role").value;
    const nameInput = target.elements.namedItem("player").value;
    const username = target.elements.namedItem("username").value;
    const pass = target.elements.namedItem("pass").value;
    let x = "";
    for (let i of pass) {
        x += "*";
    }
    console.log("Role:", roleInput);
    console.log("Name:", nameInput);
    console.log("Username:", username);
    console.log("Pass:", x);
});
