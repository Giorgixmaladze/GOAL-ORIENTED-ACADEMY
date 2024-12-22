const form  = document.getElementById("form")
const database = []
class Data{
    constructor(email,name){
        this.email = email;
        this.name = name;
    }
}

form.addEventListener("click", (e) =>{
    e.preventDefault();
    const email = form.email.value;
    const name = form.username.value;
    const data = new Data(email,name)
    database.push(data)
    localStorage.setItem("data",JSON.stringify(database))

    const exists = database.findIndex(item => (item.email == email) && (item.name == name))
    if(exists === -1){
        database.push(data)
    }else{
        console.error("This account is already exists")
    }
})