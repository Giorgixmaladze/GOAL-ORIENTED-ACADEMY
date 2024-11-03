const promise = new Promise((resolve,reject) =>{
    setTimeout(() => {resolve("Data fetched")},1000)
})

promise.then(result =>{
    console.log(result)
})