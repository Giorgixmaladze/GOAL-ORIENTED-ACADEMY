// შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 
// მნიშვნელობა (თქვენი სურვილით აარჩიეთ თუ რა ტიპის ობიექტს შექმნის კონსტრუქტორი)

function Person(name,lastName, age ,height) {
    this.name = name;
    this.lastname = lastName;
    this.age = age;
    this.height = height;
}

const person = new Person("Giorgi","Khmaladze","16", "1.78")

console.log(person); 

