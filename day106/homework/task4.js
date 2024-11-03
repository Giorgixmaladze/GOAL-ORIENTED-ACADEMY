
const promise= new Promise((resolve,reject)=>{
    const randomNumber = Math.random()
    if(randomNumber > 0.5){
        resolve("Success!")
    }else{
        reject("Failed!")
    }
})

promise.then(result =>{
    console.log(result)
})
promise.catch(error =>{
    console.log(error)
})