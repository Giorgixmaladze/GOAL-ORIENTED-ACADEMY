/* **Getters და Setters**: შექმენი კლასი `Product`, რომელსაც ექნება `name` და `price` თვისებები. 
გამოიყენე `get` და `set` accessors `price`-ისათვის, რათა დარწმუნდე, რომ ფასი მხოლოდ დადებითი მნიშვნელობაა.*/





class Product{
    constructor(name,price){
        this.name = name;
        this._price = price;
    
    }
    set price(value){
        this._price = value;
    }
    get price(){
        return this._price;
    }
}


const product = new Product("snickers",10)

console.log(product.price)