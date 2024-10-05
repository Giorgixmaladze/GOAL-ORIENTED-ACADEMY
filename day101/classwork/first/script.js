



class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log("This animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark!");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Meow!");
    }
}

const dog = new Dog("Toby", 3);
dog.speak()

const cat = new Cat("Garfield", 2);
cat.speak()













class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`make: ${this.make}, model: ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model); 
        this.fuelType = fuelType;
    }

    displayInfo() {
        super.displayInfo(); 
        console.log(`fuel ype: ${this.fuelType}`);
    }
}


const myCar = new Car("Subaru", "Imprezza", "Gasoline");

myCar.displayInfo();









class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

class Triangle extends Shape {
    constructor(name, sides, base, height) {
        super(name, sides);
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}