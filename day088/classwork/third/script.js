const myWins = document.getElementById("myScore");
const compWins = document.getElementById("compScore");
const winner = document.getElementById("wins")
const btns = document.getElementById("btns");

const compChoices = ["rock","paper","scissors"]

let myScore = 0;
let compScore = 0;


btns.addEventListener("click",(e) =>{
    const btnId = e.target.id;

    const compChoice = compChoices[Math.floor(Math.random() * compChoices.length)]

    if(btnId === compChoice){
        winner.innerHTML = "It's a Tie"
    }else if((btnId == "rock" && compChoice == "paper") || (btnId == "scissors" && compChoice == "rock") || (btnId == "paper" && compChoice == "scissors")){
        compScore ++;
        compWins.textContent = compScore;
        winner.textContent = "You lost"
    }else{
        myScore ++;
        myWins.textContent = myScore;
        winner.textContent = "You win";
    }
})

