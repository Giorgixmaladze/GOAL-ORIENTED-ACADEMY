// შექმენით ფუნქცია სახელად createUser, მანამდე კი შექმენით ამ ფუნქცვიის ტიპი, ფუნქციას უნდა გადაეცემოდეს 3 არგუმენტი, სახელი გვარი და ასაკი, ხოლო უნდა აბრუნებდეს ობიექტს, ობიექტის ტიპიც უნდა შექმნათ რომელიც შედეგაბ 3 კუთვნილებისაგან, სახელი გვარი და ასაკი


type objType = {
    name:string,
    lastname:string,
    age:number
}


type funcType = (name:string,lastname:string,age:number) => objType


let myFunc:funcType;

myFunc = (name,lastname,age) =>{
    return {
        name: name,
        lastname:lastname,
        age:age
    }
}

console.log(myFunc("Giorgi","Khmaladze",18))