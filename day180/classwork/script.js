// 1) შექმენით საიტი სადაც გექნებათ 2 input ელემენტი, სადაც რიცხვის შეტანა შეგვეძლება, აგრეთვე გექნებათ ღილაკი რომელზეც დაწკაპების შედეგად ხდება ამ როი რციხვის ერთმანეთზე შეკრება და ეკრანზე, შემდეგ შექმენით typescriptis ფაილი სადაც დაწერთ შესაბამის კოდს, აგრეთვე დაამატეთ ფუნქცია სახელად add რომელსაც გადაეცემა 2 რიცხვი და აბრუნებს რიცხვს


const form = document.querySelector("form")


const add = () =>{
    const number1 = form.num1.value
    const number2 = form.num2.value
    return  Number(number1) + Number(number2)
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const p = document.querySelector("p")
    p.textContent = add()
})