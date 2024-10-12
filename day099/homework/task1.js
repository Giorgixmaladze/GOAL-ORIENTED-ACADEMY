// Define a Car class with public properties make and model. Create an instance and access these properties.

class Car {
    constructor(make,model){
        this.make = make;
        this.model = model;
    }
}

const car = new Car("Ford","mustang");
console.log(car)