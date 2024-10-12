/* Create a Vehicle class with private properties like speed. Then, create a Bike subclass that can access 
public methods to modify or retrieve the speed.*/

class Vehicle{
    #speed
    constructor(speed = 0){
        this.#speed = speed;
    }

    set speed(speed){
        if(speed >= 0){
            this.#speed = speed;
        }else{
            console.log("speed cannot be neagtive")
        }
    }
    get speed(){
        return this.#speed;
    }

    
}

class Bike extends Vehicle{
    constructor(speed = 0){
        super(speed)
    }
}
const bike =  new Bike()
bike.speed = 20;
console.log(bike.speed)
