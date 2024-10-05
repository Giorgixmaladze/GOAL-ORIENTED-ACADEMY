
function data(border){
    let arr = []
    
    for(let i = 0; i <= border; i++){
        const numsType = {
            value : i,
            type : ""
        }
        if(i % 2 == 0){
            numsType.type = "Even"
        }else{
            numsType.type = "Odd"
            }
    
        arr.push(numsType)
    }
    return arr
}

console.log(data(10))