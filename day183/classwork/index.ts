// type userType = {
//     firstname:string,
//     lastname:string,
//     id:string | number
// }


// type funcType = (firstname:string,lastname:string,id:string | number) => string | Object



// const createUser:funcType = function(firstname,lastname,id,){
//     const user:userType = {firstname,lastname,id}
//     return user
// }


// console.log(createUser("Giorgi","Khmaladze",1234))




// 1) შექმენით პირველრიგში ობიექტის ტიპი, სახელად carType, ობიექტში უნდა იყოს 4 კუთვნილება, ბრენდი, მოდელი გამოშვების წელი და id რომელიც შესაძლოა იყოს სტრინგიც და რიცხვიც. შემდეგ შექმენით ფუნქციის ტიპი რომელსაც გადაეცემა 4 მნიშვნელობა და უნდა დააბრუნოს carType თიპის მიხედვტ შექმნილი ობიექტი, ფუნქციაში გამოიყენეთ type guard შეამოწმეთ id არის თუ არა სტრინგი, თუ არის გააადითედ და ისე შეინახეთ ობიექტში, თუ რიცხვი მაშ ჩვეულბრივად შეინახეთ.


// type carType ={
//     brand:string,
//     model:string,
//     year:string | number,
//     id:string | number
// }


// type funcType = (brand:string,model:string,year:string | number, id:number | string) => carType


// const func:funcType = function(brand,model,year,id){

//     if(typeof id === "string"){
//         id = id.toUpperCase()
//     }


//     const car:carType = {
//         brand,
//         model,
//         year,id
//     }


//     return car
// }

// console.log(func("Audi","rs4",2007,13214))



// const reValue = (isTrue: boolean) =>{
//     if(isTrue) return 10
//     return func("Audi","rs4",2007,13214)
// }



// const date: number | string = "dfhdhdfghf"
// date.toLowerCase();


// type Color = "yellow" | "red" | 10

// function myFunc(color:Color){
//     console.log(color)
// }

// myFunc(10)



const number: string = 5