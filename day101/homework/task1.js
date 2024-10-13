/* 1. **კლასის შექმნა და ინიციალიზაცია**: შექმენი კლასი `User`, რომელსაც ექნება
 თვისებები `name` და `email`. კონსტრუქტორის 
მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.*/

/*მეთოდის შექმნა და გამოძახება**: დაამატე `User` კლასს 
 მეთოდი `displayInfo()`, რომელიც კონსოლში დაბეჭდავს მომხმარებლის 
 სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.
 */

 /*სტატიკური მეთოდების გამოყენება**: დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`,
    რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.*/




 class User{
    constructor(user,email){
        this.user = user;
        this.email = email;
    }
    displayInfo(){
        console.log(`${this.user} , ${this.email}`)
    }
    static compareUsers(user1,user2){
        if(user1.email === user2.email){
            console.log("they're same")
        }else{
            console.log("they're not same")
        }
    }
}


const user1 = new User("Giorgi Khmaladze" ,"xmaladzegiorgi@gmail.com");
const user2 = new User("xmaladzee","XmalaXmala@gmail.com")


user1.displayInfo()
user2.displayInfo()

User.compareUsers(user1,user2)
