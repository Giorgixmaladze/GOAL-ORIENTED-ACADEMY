const form = document.getElementById("myform")
let dataBase = []
function validateForm(){
    
    const name = form.elements.name.value
    const email = form.elements.email.value
    const pass = form.elements.pass.value
    
    for(let i = 0; i < dataBase.length; i++ ){
        if(email === dataBase[i].email){
            return alert("this email already exists")
        }
    }
    alert("acc succesfully created")

    let acc = {
        name : name,
        email : email,
        pass : pass
    }
    
    
    dataBase.push(acc)
  
    
   console.log(dataBase)
}

    
    
