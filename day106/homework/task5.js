const promise = new Promise((resolve,reject)=>{
    resolve(5)
})

promise.then(result =>{
    alert(result)
    
    return new Promise((resolve,reject)=>{
        resolve(result * 2)
    })
}).then(result =>{
    alert(result)
    return new Promise((resolve,reject)=>{
        resolve(result * 2)
    })
}).then(result =>{
    console.log(result)
})
