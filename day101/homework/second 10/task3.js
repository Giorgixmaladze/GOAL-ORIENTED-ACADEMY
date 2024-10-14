/*
 **მრავალ Map-ის გაერთიანება**: შექმენი ორი `Map`.
  პირველი `Map` შეიცავდეს პროდუქტებს და მათ ფასებს,
   ხოლო მეორე `Map` - პროდუქტებს და მათი რაოდენობებს. გამოიყენე
  `forEach()` მეთოდი, რათა ახალი `Map` შექმნა, რომელიც 
  ინახავს თითოეული პროდუქტის მთლიან ფასს (ფასი * რაოდენობა) */


  const prices = new Map([
    ["Snickers" ,10],
    ["CocaCola", 20],
    ])


const amount = new Map([
    ["Snickers", 20],
    ["CocaCola", 20]
    ]);



const fullPrice = new Map();


prices.forEach((price,product)=>{
    const amounts = amount.get(product);
    fullPrice.set(product,price * amounts)
})


console.log(fullPrice)


