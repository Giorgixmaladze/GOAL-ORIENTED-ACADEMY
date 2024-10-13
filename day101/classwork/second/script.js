const products = new Map();


function addProduct(name, price) {
    products.set(name, price);
    console.log(`Product ${name} succesfully added, price: ${products.get(name)}$.`);
    
}

addProduct("Phone", 500);
addProduct("Tv", 1000);
addProduct("Laptop", 1500);
addProduct("Tablet", 300);







const films = new Map();
cars.set("Snowfall", 2023);
cars.set("Spider-man no way home", 2021);
cars.set("Fast X", 2023);



function checkFilm(title) {
    if (films.has(title)) {
        console.log(`film : ${title} year : ${films.get(title)}`);
    }
}


checkCar("SnowFall");
checkCar("Spider-man no way home");
checkCar("Fast X");







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







const restaurants = new Map();


restaurants.set("cafe verde","beef steak")
restaurants.set("umami","sushi")
restaurants.set("iveria", "salad")


console.log(restaurants.size)







const countries = new Map()


countries.set("001","Georgia")
countries.set("002","USA")
countries.set("003","China")


console.log(countries.keys())
console.log(countries.values())




const drinks =  new Map();


drinks.set("cocacola", "200")
drinks.set("fanta", "150")
drinks.set("bebos kompoti", "10")

drinks.forEach((calories,name){
    console.log(`Drink : ${name}, Calories : ${calories}`)
    
})




