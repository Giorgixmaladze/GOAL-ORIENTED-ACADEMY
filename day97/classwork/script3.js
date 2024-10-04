
const accounts = [];
const form = document.getElementById("registration-form")
const btn = document.getElementById("btn");
btn.addEventListener("click",() =>{
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const email = form.email.value;
    const password = form.password.value;
    const city = form.city.value;


    const newacc = new Account(firstName, lastName, email, password, city);

    
    accounts.push(newacc);

    
})


class acc {
    constructor(firstName, lastName, email, password, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
    }

   
}


console.log(acc)

