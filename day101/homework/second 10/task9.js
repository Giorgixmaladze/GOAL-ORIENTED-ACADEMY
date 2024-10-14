/**
 **Map-ის დაგროვება Reduce-ით**: შექმენი `Map`, რომელიც ინახავს
  სტუდენტების დასახელებებს და მათ ქულებს. გამოიყენე `Array.from()` და 
  `reduce()` მეთოდი, რათა ამ სტუდენტების საშუალო ქულა გამოთვალო.

 */


  const students = new Map([
    ["Giorgi", 50],
    ["Luka" ,60]
]);

const studentsArray = Array.from(students.values());

const average = studentsArray.reduce(avg =>{
    sum = 0;
    for(i of studentsArray){
        sum += i
    }
    avg = sum / studentsArray.length
    
    return avg
})

console.log(average)