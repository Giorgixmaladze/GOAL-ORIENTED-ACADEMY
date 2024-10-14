/***Map-ის ინიციალიზაცია
 *  მონაცემებით**: შექმენი `Map`, რომელიც ინახავს სამ ქალაქს და მათ მოსახლეობას.*/


/** **Map-ის ელემენტის განახლება**: იმავე `Map`-ში,
 *  რაც წინა დავალებაში შექმენი, განაახლე ერთი ქალაქის მოსახლეობა ახალი მნიშვნელობით.
 * 
 */
const population = new Map([
    ["Tbilisi", 1000000],
    ["Kutaisi",500000],
    ["Rustavi", 450000]
]);

population.set("Rustavi", 600000);



console.log(population)
