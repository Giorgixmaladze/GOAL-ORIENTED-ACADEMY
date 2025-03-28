/*Project: User Registration System
Objective:
Build a simple user registration system where users can input their first name, last name, and age through a form. The data will be 
processed using a JavaScript class that incorporates class features such as methods, getter/setter, public fields, private fields,
private methods, and static methods. The project will also display the number of users registered.

Project Requirements:
Form: Create an HTML form where users can input:

First name
Last name
Age
Class Structure:

Public Fields: Store user details like first name, last name, and age.
Private Fields: Keep sensitive or internal data hidden (e.g., ID or user validation status).
Methods: Add methods for validation, registration, and displaying user info.
Getter/Setter: Use getter/setter to access and update user details safely.
Private Methods: Add a private method to handle any internal logic (e.g., checking if the age is valid).
Static Methods: Keep track of how many users have been registered in the system (e.g., total user count).
DOM Manipulation:

When the user submits the form, create a new user instance using the class.
Validate the user input before allowing the user to be registered.
Display the user count and user details on the page once a valid user is registered.
Error Handling:

Display appropriate error messages if the input is invalid (e.g., age below 0 or empty fields). */

const form  = document.querySelector("form");

class Account {
    static accs = []
    static count  = 0
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        Account.objCount()
    }
    
    

    

    printinfo(){
        console.log(`firstname: ${this.firstname}`)
        console.log(`lastname : ${this.lastname}`)
        console.log(`age : ${this.age}`)

    }
    static objCount(){
        this.count += 1;
    }

    static getcount(){
        return this.count
    }
    static addAccount(acc){
        Account.accs.push(acc)
    }
    static getaccs(){
        return Account.accs
    }

    

}




form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const age = form.age.value;

    const acc = new Account(firstName,lastName,age,)
    Account.addAccount(acc)
    console.log(Account.getaccs())
    console.log(Account.getcount())
})




