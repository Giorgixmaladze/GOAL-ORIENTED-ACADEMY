import  add  from "./tasks.js";

const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.querySelector("ul")

button.addEventListener("click", (e) =>{
    e.preventDefault()
    ul.innerHTML += `
    <li>${input.value}</li>
    <input type = "checkbox">
    `
    

})


