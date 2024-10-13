/***მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა**: შექმენი
 *  მშობელი კლასი `Person` და შვილკლასი `Student`. `Person`-ს ექნება
 *  `name` და `age`, ხოლო `Student` დაამატებს `studentID` თვისებას.
 *  მემკვიდრეობისას გამოიძახე მშობელი კლასის კონსტრუქტორი `super()`-ით.
 * 
 * **Method Overriding**: იმავე `Person` და `Student` 
 * კლასებში, შექმენი მეთოდი `getDetails()`, რომელიც 
 * `Person` კლასში დაბეჭდავს 
 * მხოლოდ სახელს და ასაკს, ხოლო `Student`-ში ასევე სტუდენტის ID-ს.  */



class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getdetails(){
        console.log(`${this.name} ,${this.age} `)
    }
}

class Student extends Person{
    constructor(name,age,studentID){
        super(name,age)
        this.studentId = studentID;
    }
    getdetails(){
        super.getdetails();
        console.log(`${this.studentID}`)
    }
}


const student = new Student("Giorgi",17,20)

console.log(student)


