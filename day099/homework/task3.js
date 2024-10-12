/*Create a MathOperations class with a static method add() that 
adds two numbers. Also, define a static property PI representing the value of Pi.*/ 


class MathOperations{
    static PI = 3.14

    static add(a, b){
        return a + b
    }
}

const result = MathOperations.add(10,2)
console.log(MathOperations.PI)
console.log(result)