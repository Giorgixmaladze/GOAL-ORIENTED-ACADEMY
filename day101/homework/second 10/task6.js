/**
 * თითოეული ელემენტის წაშლა Map-იდან**: შექმენი `Map` 
 * სამი სხვადასხვა პროდუქტის დასახელებით და ფასით. შემდეგ წაშალე თითოეული
 *  ელემენტი `delete()` მეთოდის გამოყენებით და დაბეჭდე შეტყობინება, რომ პროდუქტი წაიშალა.

 */



const products = new Map([
    ["Snickers", 10],
    ["Cocacola", 15],
    
])


products.forEach(product =>{
    products.delete(product)
    console.log("Product deleted succesfully")
})