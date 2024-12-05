/*გამოიყენეთ:
React, ReactDOM და Babel-ის cdn-ები,
დააკავშირეთ ისინი თქვენს html ის ფაილს (ჩააკოპირეთ), 
შემდეგ შექმენით html ში root/ფესვი ელემენტი, 
ჯავასკრიპტის ფაილში კი jsx გამოყენებით შექმენით კომპონენტი/ნაწილი, სადაც გამოიტანთ: სათაურს, პარაგრაფებს და ღილაკებს, 

საბოლოოდ კი დარეენდერეთ/გამოიტანეთ გვერდზე ეს ობიექტები, 
კომენტარებით ახსენით რას აკეთებს ყველა ის ბიბლიოთეკა რაც ჩამოვთვალეთ და ახსენით რა არის jsx.*/


const div = (
    <div>
        <h1>This is heading</h1>
        <p>this is paragraph</p>
        <button>This is button</button>
    </div>
)

let root = ReactDOM.createRoot(document.getElementById("main"))

root.render(div)