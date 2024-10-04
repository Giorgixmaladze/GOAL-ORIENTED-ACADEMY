
// კლასები ჯავასკრიპტში შემოტანილი იქნა ES 6 ის მიერ,
// კლასები ჯავასკრიპტში გვეხმარება გავამარტივოთ ობიექტების შექმნა
// და მასთან დაკავშირებული მოქმედებები




// კლასის საბაზისო სინტაქსი გამოიყენება ასე:

class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("John");
  console.log(user)






 

class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }