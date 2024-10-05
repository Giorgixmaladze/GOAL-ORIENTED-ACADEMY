let sum = 0

function evenSum(border){
    for(let i = 0; i <= border;i ++){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}


console.log(evenSum(10))