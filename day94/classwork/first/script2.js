const names = ["Luka", "Lile", "Nia"];



names.forEach((currValue,index,arr) => {
    console.log(`currValue is ${currValue}, currIndex is ${index}, arr is ${arr}`)
})




const manualForEach = (arr,func) => {
    for(let i = 0; i  < arr.length;i++){
        func(arr[i], i,arr)
    }
    
}

manualForEach(names, (value) => {
    console.log(value)
})
















// names.forEach((currValue,index,arr) => {
//     console.log(`currValue : ${currValue}, currIndex : ${index}`)
//     console.log(`arr : ${arr}`)
// })



const newNames = names.map((currName,index,arr) => {
    return currName + index
})

console.log(newNames)


const manualMap = (arr,func) => {
    const result = [];
    for(let i = 0; i< arr.length; i++ ){
        const value = func(arr[i], i, arr)
        result.push(value)
    }
    return result
}


console.log(manualMap(names, (currValue,index) => currValue + index))







const filter = names.filter((curvalue) =>{
    return curvalue[0] != "L";
})






const manualFilter = (arr,func) => {
    const result = [];
    for(let i = 0; i< arr.length; i++){
        const bool = func(arr[i], i, arr)
        if(bool){
            result.push(arr[i])
        }
    }
    return result;
}


console.log(manualFilter(names, (currValue) =>{
    return currValue[0] != "L";
}))





