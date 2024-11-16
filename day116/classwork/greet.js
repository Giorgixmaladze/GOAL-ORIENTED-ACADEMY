/**
 * 1) შექმენით 2 ფაილი, პირველ ფაილში შექმენით 2 ფუნქცია, greet და calculateAverage. თქვენი დავალებაა
 *  რომ ეს ფუნქციები გადაიტანოთ მეორე index.js ფაილში, commonJS-ის დახმარებით, გამოიყენეთ import/export
 */


export const greet = (name) => {
    console.log(`Hello ${name}!`)
}

//named export
export const calculateAverage = (num1,num2) => {
    console.log((num1 + num2) / 2)
}


//default export
export default greet