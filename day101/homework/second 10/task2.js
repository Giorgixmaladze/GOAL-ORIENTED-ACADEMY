/**
 * შექმენი `Map`, რომელიც ინახავს ვალუტის კოდებს და მათ 
 * სახელებს (მაგ., "USD" => "Dollar"). გამოიყენე `for...of` ციკლი, რათა თითოეული წყვილი გამოიტანო.
 */



const moneys = new Map([
    ["GEL","Lari"],
    ["USD","Dollar"],
    ["EUR","Euro"]
])


for(let i of moneys){
    console.log(i)
}