// const nums = [1,2,3,4,5,6,7,8,9,10];

// const primeNumbers = numbers.filter((num) => {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false; 
//     }
//     return true;
//   });


// console.log(primeNumbers)







// function person(id,name){
//     this.id = id;
//     this.name = name;
// }


// const person1 = new person(1,"Gio");

// const person2 = new person(2,"Luka");

// const arr = []

// arr.push(person1,person2)



// const mapArr = arr.map(object =>{
//     return object.name
// })

// console.log(mapArr)









// const products = [
//     {name:"meat",price:20.00},
//     {name:"chips",price:10.00}
// ]
// const certainValue = 15.00
// const filter = products.filter(product =>{
//     return product.price < certainValue
// })


// console.log(filter)












// const books = [
//     {name: "Melania",author:"Melania Trump"},
//     {name: "Counting miracles", author:"Nikolas Sparks"}
// ]


// const booksMap = books.map(book  =>{
//     return `Title by Author : ${book.name}`
// })

// console.log(booksMap)











// const nums = [10,20,30,5,4,3,40,50]

// const filter = nums.filter(number =>{
//     return number > 10 && number % 3 === 0;

// })

// console.log(filter)







// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 18 },
//     { name: 'Charlie', age: 30 },
    
//   ];
  
  
  
//   const usersWithIsAdult = users.map(user => ({
//     user,
//     isAdult: user.age >= 18,
//   }));
  
//   console.log(usersWithIsAdult);
  










// const nums = [20,40,50,60,70,80,90,100];

// const filter = nums.filter(number =>{
//     return number > 50;
// })

// const map = filter.map(num => {
//     return num / 2
// })


// console.log(filter)
// console.log(map)










// const wordArray = ["apple", "banana", "cherry", "apple", "banana", "grape"];


// const wordCount = {};  

// wordArray.forEach((word) => {
//   if (wordCount[word]) {
  
//     wordCount[word]++;
//   } else {

//     wordCount[word] = 1;
//   }
// });

// console.log(wordCount); 









// Given an array of objects representing cars
//  (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.



const cars =  [
    {brand : "Ford", model : "Mustang"},
    {brand : "Toyota", model : "Camry"},
    {brand : "Subaru", model:"Forester"}
]



const carsFilter = cars.filter(car =>{
    return car.brand === "Ford";
})


console.log(carsFilter)
