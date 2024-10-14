/***Privileged მეთოდები**: შექმენი კლასი `BankAccount`, რომელსაც ექნება დაცული (private) თვისება 
 * `_balance`. დაამატე მეთოდი `deposit(amount)` ბალანსის დასამატებლად და `withdraw(amount)` ფულის ამოსაღებად. */



class BankAccount{
    #balance = 0;
    constructor(){
        
    }
    set balance(value){
        this.#balance = value
    }
    deposit(amount){
        this.#balance += amount; 
    }
    withdraw(amount){
        this.#balance -= amount;
    }
    get balance(){
        return this.#balance;
    }
}


const bank = new BankAccount();

console.log(bank.deposit(50))











