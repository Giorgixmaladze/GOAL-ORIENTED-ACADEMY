function generateEven(border){
    evenNums = []
    for(let i = 0;i<=border;i++){
        if(i % 2 == 0){
            evenNums.push(i)
        }
    }
    return evenNums
}
function calculateSum(evenNums){
    let sum = 0
    for(let x of evenNums){
        sum += x
    }
    return sum
}

console.log(generateEven(20))
console.log(calculateSum(evenNums))