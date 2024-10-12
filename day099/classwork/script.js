class Account{
    static count = 0;
    
    constructor(firstname,lastname,password){
        this.firstname1 = firstname;
        this.lastname = lastname;
        Account.objCount()
    }
    
    
    
    static objCount(){
        this.count += 1;
        
    }
    static get count(){
        return this.count;
    }
    
}

const acc1 = new Account("Luka","Tskhvaradze","luka1234");

const acc2 = new Account("Luka","Tskhvaradze","luka1234");
console.log(Account.count)

Account.objCount();