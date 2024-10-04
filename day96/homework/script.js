// function Person(name,age,city){
//     this.name = name;
//     this.age = age;
//     this.city = city;
// }

// const person = new Person("Giorgi",17,"Tbilisi");
// console.log(person)

// console.log(person.name)
// console.log(person.city)

// let{name,age} = person

// console.log(name)
// console.log(age)




// const student = {
//     name : "Giorgi",
//     age:17,
//     adress:{}
// }


// const adress = {
//     city: "Tbilisi",
//     country:"Georgia"
// }



// const {name:first,age:second,adress:third} = student;


// Object.assign(third,adress)
// const {city,country} = third
// console.log(city)




// const product = {
//     name: 'Awesome Widget',
//     price: 49.99,
//   };
  
 
//   const { name, category = 'general' } = product;
  
//   console.log(`Product name: ${name}`);
//   console.log(`Product category: ${category}`);






// const displayCar = (...car) => {
//     for(i of car){
//         console.log(i)
//     }

// }


// function Car(brand,model,year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }

// const car = new Car("Ford","Mustang",1970);


// const {brand,model,year} = car;

// displayCar(brand,model,year)





// const book = {
//     title: "The Hitchhiker's Guide to the Galaxy",
//     author: "Douglas Adams",
//     year: 1979,
//     publisher: "Pan Books"
//   };
  
  
//   const { year, publisher, ...restOfBook } = book;
  
//   const newObj = {year,publisher}
  
//   console.log({newObj})





// const user = {
//     name:"Giorgi",
//     age:17
// }

// const location = {
//     city:"Tbilisi",
//     country : " Georgia"
// }


// const data = {...user,...location}

// console.log(data)

  




// const sumNumbers = (...numbers)=> {
//     return numbers.reduce((acc,curr) => acc + curr , 0)
// }

// const result = sumNumbers(1,2,3,4,5);
// console.log(result)



const numbers1 = [1,2,3];
const numbers2 = [4,5,6]


const combined = [...numbers1 , ...numbers2]

console.log(combined)

