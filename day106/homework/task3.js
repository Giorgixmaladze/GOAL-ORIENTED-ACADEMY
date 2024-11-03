const promise = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("2 Seconds have passed"),2000)
})
promise.then(fulfill =>{
    console.log(fulfill)
})