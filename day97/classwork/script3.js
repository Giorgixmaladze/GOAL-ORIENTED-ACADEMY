const form  = document.getElementById("myform");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    const inputs = document.getElementsByTagName("input")
    let data = []
    const firstNameValue = form.elements.firstname.value;
    const lastNameValue = form.elements.lastname.value;
    const emailValue = form.elements.email.value;
    const passValue = form.elements.password.value;
    const city = form.elements.city.value
    class User{
        constructor(firstName,lastName,email,password,city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.city = city;
        }
        printInfo(){
            console.log(`Name : ${this.firstName} ${this.lastName}`)
            console.log(`Email : ${this.email}`)
            console.log(`Password : ${this.password}`)
            console.log(`City : ${this.city}`)
        }
        dataPush(){
            data.push(this.firstName,this.lastName,this.email,this.password,city)
        }
        
    }
    let user = new User(firstNameValue,lastNameValue,emailValue,passValue,city)
    user.printInfo()
    user.dataPush()
    form.reset()
    
})

