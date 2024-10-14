/*
**კლასი `Map`-ის ელემენტების ჩამონათვალით**: შექმენი კლასი `Zoo`, რომელსაც ექნება `Map`
 ცხოველების სახელებით და მათი რაოდენობებით
. დაამატე მეთოდი `listAnimals()`, რომელიც დააბრუნებს `Map`-ში არსებულ ყველა ცხოველის ჩამონათვალს. */


class Zoo{
    constructor(){
        this.animals = new Map();
    }
    addAnimals(animal,quantity){
        this.animals.set(animal,quantity);
    }
    listAnimals(){
        for(i of this.animals.entries()){
            console.log(i)
        }
    }
}

const zoo = new Zoo();

zoo.addAnimals("Lion",400);
zoo.addAnimals("tiger",600)

zoo.listAnimals()