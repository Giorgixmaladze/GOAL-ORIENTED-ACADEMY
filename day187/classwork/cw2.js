const util = require('util');


// ამოწმებს გადაცემული მნიშვნელობა არის თუ არა Date ობიექტი.
const isDate = util.types.isDate(new Date());
console.log('Is Date:', isDate)

// ეს მეთოდი აბრუნებს ფორმატირებულ სტრიქონს, წააგავს პითონის format მეთოდს
const name = 'Giorgi';
const age = 18;
const text = util.format('User: %s | Age: %d', name, age);
console.log(text)
// %d -> იწერება თუ არგუმენტი ეკუთვნის რიცხვით მონაცემს, ხოლო %s იწერება თუ არგუმენტი ეკუთვნის სტრინგ ტიპის მონაცემს


const names = ["gio","nika","luka"]
console.log(Array.isArray(names))