class Human {
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    printinfo(){
        console.log(this.firstname, this.lastname)
    }
}


class Worker extends Human{
    constructor(firstname,lastname,position){
        super(firstname,lastname)
        this.position = position;
    }
    
    
}

const worker1 = new Worker ("Luka" ,"tskhvaradze", "mentor")


worker1.printinfo()