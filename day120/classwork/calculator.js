function calculator(num1,num2,operation){
    if(operation === "+"){
        return num1 + num2
    }
    else if(operation === "-"){
        return num1 - num2
    }
    else if(operation === "*"){
        return num1 * num2
    }
    else if (operation === "/"){
        return num1 / num2
    }
}

function filter(arr,func){
    const res = []
    for(let i = 0; i< arr.length; i++){
        if(func(arr[i])){
            res.push(i)
        }
    }
    return res

}



export {calculator,filter};
