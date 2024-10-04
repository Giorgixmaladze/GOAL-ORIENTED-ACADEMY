
const myScore = document.getElementById("myScore");
const compScore = document.getElementById("compScore")
const wins = document.getElementById("wins");
const btns = document.getElementById("game")



const comppChoices = ["rock", "paper","scissors"]

let myWins = 0;
let compWins = 0

btns.addEventListener("click",(e) =>{
    btnID = e.target.id;

    const  compChoice = comppChoices[Math.floor(Math.random() * comppChoices.length)]

    if(btnID === compChoice){
        wins.innerHTML = "It's a tie"
    }else if((btnID === "rock" && compChoice === "paper") || (btnID === "paper" && compChoice === "scissors") || (btnID === "scissors" && compChoice === "rock" ))  {

        compWins ++;
        wins.innerHTML = "Computer wins";
    }else{
        myWins ++;
        wins.innerHTML = "You win";
    }
})







