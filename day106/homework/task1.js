const promise = new Promise((resolve,reject) =>{
    let isrunning = true;
    if(isrunning){
        resolve("Hello promise")
    }else{
        reject("Bye promise")
    }
})

promise.then(function(fulfill){
    if(fulfill){
        console.log(fulfill)
    }
},function(error){
    if(error){
        console.log(error)
    }
})