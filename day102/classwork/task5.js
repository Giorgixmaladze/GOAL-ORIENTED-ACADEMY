const map = new Map([
    ["one",1],
    ["two", 2],
    ["three", 3],
    ["four", 4]
    ])


map.forEach((value,key)=>{
    if(value % 2 === 0){
        console.log(key,value)
    }
})