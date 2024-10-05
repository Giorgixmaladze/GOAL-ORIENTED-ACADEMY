// გავაკეთეთ while ციკლი სანამ i იქნება ნაკლები 20ზე გამოიტანოს ლუწი რიცხვები

// let i = 0;
// while(i < 20){
//     if(i % 2 === 0){
//         console.log(i)
//     }
//     i ++;
// }




// for ციკლის საშუალებით დავბეჭდეთ 10 ის ჩათვლით რიცხევბი

// for(let i = 0; i < 10+1; i++){
//     console.log(i)
// }




// გავაკეთეთ ფილტრი ლუწი და კენტი რიცხვების და while ციკლის საშუალებით ასე რომ ვთქვათ გავუწერეთ ზღვარი 30 მდე რიცხვები გავფილტრეთ

// let oddList = [];
// let evenList = [];
// let i = 0
// while(i < 30){
//     if(i % 2 === 0){
//         evenList.push(i)
//     }else{
//         oddList.push(i)
//     }
//     i++
// }

// console.log(oddList)
// console.log(evenList)




// გავაკეთეთ იგივე მაგალითი for ციკლის საშუალებით

// let oddList = [];
// let evenList = [];

// for(let i = 0;i < 30; i++){
//     if(i % 2 === 0){
//         evenList.push(i)
//     }else{
//         oddList.push(i)
//     }
// }

// console.log(evenList)
// console.log(oddList)



// გავაკეთეთ დადებითი და უარყოფითი რიცხვების ფილტრი for ციკლის დახმარებით

// function numFilter(arr){
//     negativeNums = []
//     positiveNums = []
//     for(i of arr){
//         if(i < 0){
//             negativeNums.push(i)
//         }else{
//             positiveNums.push(i)
//         }
//     }
//     console.log(negativeNums)
//     console.log(positiveNums)
// }


// console.log(numFilter([1,-3,1,3,-6]))




// while ციკლის საშუალებით მომხმარებელს შემოვატანინეთ პაროლი და სანამ პაროლი სწორი არ იქნებოდა კიდევ უნდა მოგვეთხოვა პაროლი

// let pass;

// while(pass !== "12345"){
//     pass = prompt("Enter the password")
//     if(pass === "12345"){
//         alert("correct")
//     }
// }




// for ციკლის მეშვეობით მივუწერეთ 0 იდან 20 ის ჩათლით ლუწია თუ კენტი

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         console.log(i + " " + "is even" )
//     }else{
//         console.log(i + " " + "is odd")
//     }
// }




//  იგივე მაგალითი გავაკეთეთ ამჟამად while ციკლის დახმარებით

// let i = 0
// while(i < 20){
//     if(i % 2 === 0){
//         console.log(i + " " + "is even" )
//     }else{
//         console.log(i + " " + "is odd")
//     }
//     i++
// }





// function generateEven(border){
//     nums = []

//     for(let i = 0; i <= border; i++){
//         nums.push(i)
//     }
//     return nums
// }
// function calculateSum(nums){
//     sum = 0
//     for(i of nums){
//         sum += i
//     }
//     return sum
// }



// console.log(generateEven(20))
// console.log(calculateSum(nums))




