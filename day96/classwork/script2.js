const numbers = [1,2,3,4,5];

const sum = numbers.reduce((acc,curValue)=>{
    return acc + curValue
},0)

console.log(sum)


const manualReduce = (arr,func,startingValue = 0) =>{
    let acc = startingValue;
    
    for(const value of arr){
        acc = func(acc,value)
    }
    return acc
}

console.log(manualReduce(numbers,(acc, cur) => acc + cur,10))



const multiply = numbers.reduce((acc,curValue)=>{
    return acc * curValue
},0)


console.log(multiply)