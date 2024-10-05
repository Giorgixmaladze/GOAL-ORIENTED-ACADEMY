const products = new Map();


function addProduct(name, price) {
    products.set(name, price);
    console.log(`Product ${name} succesfully added, price: ${price}$.`);
}

addProduct("Phone", 500);
addProduct("Tv", 1000);
addProduct("Laptop", 1500);
addProduct("Tablet", 300);


console.log(products)






const cars = new Map();
cars.set("Toyota", 2010);
cars.set("Ford", 1999);
cars.set("Subaru", 2014);
cars.set("Bmw", 2019);


function checkCar(title) {
    if (cars.has(title)) {
        console.log(`car : ${title} year : ${cars.get(title)}`);
    }
}


checkCar("Ford");
checkCar("Toyota");
checkCar("Mercedes");







const athletes = new Map();
athletes.set("Usain Bolt", { event: "100m", result: "9.58s" });
athletes.set("Cristiano Ronaldo", { event: "Football", result: "903Goals" });
athletes.set("Lasha Bekauri", { event: "Judo", result: "Gold Medal" });


function deleteAthlete(name) {
    if (athletes.delete(name)) {
        console.log(`Sportsman "${name}" Succesfully deleted.`);
    }
}


deleteAthlete("Usain Bolt");



console.log(athletes);









let carModels = new Map();


carModels.set("Toyota", "Camry");
carModels.set("Honda", "Civic");
carModels.set("Ford", "Mustang");
carModels.set("BMW", "X5");





carModels.clear();


if (carModels.size === 0) {
    console.log("Map is empty .");
} else {
    console.log("Map is not empty.");
}










