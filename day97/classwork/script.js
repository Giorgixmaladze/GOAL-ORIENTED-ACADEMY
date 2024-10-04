let fruits = {
    fruit1 : "Banana",
    fruit2 : "Apple"
};

let fruitsUpdated = Object.assign(fruits ,{ fruit3: "Grape"})

console.log(fruitsUpdated)








function person(name,age){
    this.name = name;
    this.age = age;
}

const me = new person("Giorgi", 17)

const mother = new person("maka",40)
const father = new person("Temo",42)
const friend = new person("saba", 17)






function fruits(name,price){
    this.name = name;
    this.price = price;
}


const fruit1 = new fruits("Orange",2.00);
const fruit2 = new fruits("Pineapple",5.00)