const strings = ["apple","banana", "strawberry"];

const lengthMap = new Map();


strings.forEach(str =>{
    lengthMap.set(str,str.length)
})


const length = new Set(lengthMap.values())
sum = 0
for(let i of length){
    sum +=i
}


console.log(sum)