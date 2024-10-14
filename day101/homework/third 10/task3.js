/**Map-თან მუშაობის მეთოდების შექმნა**: შექმენი კლასი `PhoneBook`, რომელსაც ექნება `Map`, რომელიც 
 * ინახავს ტელეფონის ნომრებს და ადამიანების სახელებს.
 *  დაამატე მეთოდი `addContact(name, phone)` და `getContact(phone)`, რომელიც დააბრუნებს ნომრის პატრონს. */


class PhoneBook{
    constructor(){
        this.phoneBook = new Map();
    }
    addContact(name,phone){
        this.phoneBook.set(name,phone);
    }
    getContact(phone){
        for(let [name,number] of this.phoneBook){
            if(number === phone){
                return name
            }
        }
    }
};


const numbersBook = new PhoneBook();

numbersBook.addContact("Giorgi",354361)

console.log(numbersBook.getContact(354361))