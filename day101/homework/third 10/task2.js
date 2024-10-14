/*
 **Map კლასის თვისებად**: შექმენი კლასი `Store`, რომელსაც ექნება `Map`, რომელიც ინახავს 
 პროდუქტის სახელს და ფასს. დაამატე მეთოდი `getPrice(product)`, რომელიც დააბრუნებს პროდუქტის ფასს. */


 class Store {
    constructor() {
        this.products = new Map();
    }

    addProduct(name, price) {
        this.products.set(name, price);
    }

    getPrice(product) {
        return this.products.get(product)
    }
}

// გამოყენების მაგალითი
const store = new Store();
store.addProduct("ტკბილი წყალი", 1.5);
store.addProduct("პური", 0.8);
store.addProduct("რძე", 1.2);

console.log("პურის ფასი:", store.getPrice("პური")); // 0.8
console.log("რძის ფასი:", store.getPrice("რძე"));   // 1.2

