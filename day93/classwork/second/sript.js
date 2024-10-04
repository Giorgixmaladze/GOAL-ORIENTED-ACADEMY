// arrow ფუნქციის საშუალებით ვაკეთებთ ისეთ სინტაქსს რომელიც გაგვიმარტივებს ფუნქციების შექმნას


// 1
const greet = (string) => string
console.log(greet("Hello world"))



// 2
const addition = (num1,num2) => num1 + num2
console.log(addition(5, 10))



// 3
const hello = () => "Hello world"

console.log(hello())



// 4
const evenOrOdd = num =>{
    if(num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}


console.log(evenOrOdd(6))



// 5

const multiply = (num1,num2) => {
    return num1 * num2
}


console.log(multiply(5,3))





// 6


const data = (name,age) => {
    object = {
        name:name,
        age: age
    }
    return object
}


console.log(data("giorgi",17))


// 9


const nested = (num1,num2) => {
    const addition = () => {
        return num1 + num2
    }
}



console.log(nested)




// 10


const sumArray = array => {
    sum = 0
    for(let i of array){
        sum += i
        
    }
    return sum
   
}
console.log(sumArray([1,2,3,4,5,6]))
