//Create two Sets with different elements. Write a function that finds and returns elements that exist in both Sets.



const colors = new Set(["red","green","blue","yellow"])
const colors1 = new Set(["red","orange","purple"])


function bothElements(){
    for(let i of colors){
        if(colors1.has(i)){
            return i 
        }
    }
}
console.log(bothElements())