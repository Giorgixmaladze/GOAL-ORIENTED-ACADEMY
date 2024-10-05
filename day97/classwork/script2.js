
// კლასი არის ერთგვარი ფუნქცია სადაც ვქმნით ობიექტს და ობიექტთან დაკავშირებულ მეთოდებს 
// რაც ჯავასკრიპტში გვიმარტივებს საქმეს
class User{
  // პირველად ვაკეთებთ კონსტრუქტორს რომლის საშუალებითაც ვქმნით ობიექტს
 constructor(name,age){
  this.name = name;
  this.age = age;
 } 
//    შემდეგ ვქმნით მეთდებს რაოდენობაში კი არვართ შეზღუდული
 sayHi(){
  alert(`Hi I am ${this.name} I am ${thsi.age} years old`)
 }
}

// ბოლოს კი შევინახეთ ობიექტი ცვლადში და გამოვიძახეთ კლასში შექმნილი მეთოდი

let user = new User("Giorgi", 17)
user.sayHi()






let arr =[]

class Fruits{
  constructor(fruit1,fruit2){
      this.fruit1 = fruit1;
      this.fruit2 = fruit2;
  }
  pushToArr(){
      arr.push(this.fruit1,this.fruit2)
  }


}

let fruits = new Fruits("Apple","Banana")

fruits.pushToArr()

console.log(arr)


// ჯავასკრიპტში კლასები არის ერთგვარი ობიექტების შექმნის გეგმა,კლასები ამარტივებს ობიექტების
//  და მეთოდების შექმნას,რაც კოდს უფრო ორგანიზებულს და ხელახლა გამოყენებადს გახდის.


