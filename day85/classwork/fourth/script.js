//  შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, 
// თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, 
// თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1




function manualIndexOf(value,numbers){
   return numbers.lastIndexOf(value)
}


console.log(manualIndexOf(100,[1,2,4,0,100,65]))