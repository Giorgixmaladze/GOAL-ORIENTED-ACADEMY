/***Protected თვისებები და მემკვიდრეობა**: შექმენი კლასი `Appliance`, რომელიც დაცულ (protected)
 *  თვისებად შეინახავს `power`-ს. მემკვიდრეობით მიიღე `WashingMachine`
 *  კლასი, რომელიც `Appliance`-ის თვისებებს გამოიყენებს, და დაამატე დამატებითი თვისებები და მეთოდები. */


class Aplliance{
    #power;
    constructor(power){
        this.#power = power;
    }
    set power(value){
        this.#power = value;
    }

    get power(){
        return this.#power;
    }
}



class WashingMachine extends Aplliance{
    constructor(brand,power){
        super(power)
        this.brand  = brand;
    }

    printInfo(){
        console.log(`Brand : ${this.brand}, Power : ${this.power}`)
    }
}


const machine = new WashingMachine("Samsung", "500W")


machine.printInfo()


