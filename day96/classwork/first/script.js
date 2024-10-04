//  1) შექმენით reduce მეთოდის კლონი, იქონიეთ რიცხვების მასივი, ჯერ გამოიყენეთ თვითონ 
//  reduce მეთოდი და ნახეთ როგორ  მუშაობს (გაიგეთ რიცხვთა ჯამი,ნამრავლი) შემდეგ კი შექმენით მისი კლონი


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc,curValue) => {
    return acc + curValue
},0)


console.log(sum)



const manualReduce = (arr,func,startingValue = 0 ) =>{
    let acc = startingValue;
    for(const i of arr){
        acc = func(acc,i);
    }
    return acc
}

console.log(manualReduce(numbers,(acc,curValue) => acc + curValue), 0)