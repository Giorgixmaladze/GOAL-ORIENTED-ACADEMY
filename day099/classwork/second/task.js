class Account{
    /* private fields გამოგვადგება იმაში რომ კონკრეტულ ელემენტზე
     ობიექტის გარეთ წვდომა არ გვქონდეს ძირითადად გამოიყენება უსაფრთხოების მიზნით*/
    #password;
 
    /*საჯარო ველები კი არის კონტრუქტორის კუთვნილებები,რომელიც შეგვიძლია გამოვიძახოთ კლასის გარეთ */
    constructor(email,password){
        this.email = email;
        this.#password = password;
    }
    /*სტატიკურია მეთოდი რომელიც ობიექტზე არ შეგვიძლია გამოვიძახოთ არამედ თვითონ კლასსზე გამოიყენება.*/
    static


}