const btns = document.getElementsByTagName("button");
const cartItems = document.getElementById("cart-items");

let cart = [];
let images = ["Shirt.jpg","T-shirts.jpg","shoe.jpg","winter.jpg","jacket.jpg","hat.jpg","sport.jpg","glasses.jpg"]

for(let i = 0; i<= btns.length-1; i++){
    btns[i].addEventListener("click", (e) => {
        e.preventDefault();
        const items =[
            {name: "Shirt",price:"100$"},
            {name: "T-shirt",price:"20$"},
            {name: "Shoes", price:"80$"},
            {name:"Winter clothes",price:"150$"},
            {name: "Jacket", price:"80$"},
            {name:"Hat",price:"10$"},
            {name:"Sport clothes",price:"20$"},
            {name:"Glasses", price:"30$"}
        ]

        let itemName = items[i].name;
        let itemPrice = items[i].price
        cart.push(items[i])
        console.log(cart)

        let cartList = document.getElementById("cart")
        let listItem = document.createElement("li");
        let img = document.createElement("img")
        img.src = images[i]
        cartList.appendChild(img)
        cartList.appendChild(listItem) 
        listItem.innerHTML =`${itemName} ${itemPrice}`
        cartItems.style.backgroundColor = "grey"


    })
}
