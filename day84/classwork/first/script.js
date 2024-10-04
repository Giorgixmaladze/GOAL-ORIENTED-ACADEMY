const form  = document.getElementById("myform");

dataBase = [];

function Account(firstName,lastName,email){
    this.firstname = firstName;
    this.lastname = lastName;
    this.email = email;
}


form.addEventListener("submit", function(e){
    e.preventDefault();

    const firstName = form.name.value;
    const lastName = form.lastname.value;
    const email = form.email.value

    const acc = new Account(firstName,lastName,email)


    dataBase.push(acc)

    console.log(dataBase)
})