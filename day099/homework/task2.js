/* Define a BankAccount class where balance is a private property.
 Implement a public method to deposit and withdraw money from the account.*/


class BankAccount{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }

    

    printBalance(){
        console.log(this.#balance)
    }

}


const bank = new BankAccount("325235")

console.log(bank.printBalance())