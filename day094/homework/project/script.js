//**Description:** Build a simple shopping cart where users can add, remove, and update items. Each item has a name, price, and quantity. Use DOM manipulation, arrow functions, and methods like `map()`, `filter()`, and `forEach()` to perform the following:

// - **Features**:
// 1. Display the items in the cart dynamically on the page.
// 2. Add new items to the cart with a form (name, price, quantity).
// 3. Update the quantity of items already in the cart.
// 4. Remove items from the cart.
// 5. Show the total price of all items, and apply a discount if the total is above a certain amount.
// 6. Filter items based on price range or quantity.
// 7. Use `forEach()` to iterate through the cart and display each item's name, price, and quantity.
// 8. Use `map()` to generate a new list of items with a discounted price if a certain condition is met.
// 9. Use `filter()` to remove items that are no longer needed or meet certain criteria (e.g., quantity is zero).


const form = document.getElementById("myform")
const removeBtn = document.createElement("button","Delete")
const cart = document.getElementById("cart")
let items = []
removeBtn.textContent = "Delete"


function addItems(){
    const name = form.name.value
    const price = form.price.value
    const quantity = form.quantity.value

    items.push({name,price,quantity})
    console.log(items)
}


removeBtn.addEventListener("click", removeBtn)

function renderItems(){
    let div = document.createElement("div")
    div.className = "items"
    cart.appendChild(div)
    items.map((item,index) =>{
        div.innerHTML += 
        `
        <p>Name: ${item.name} </p>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity} </p>
        <button onclick = "${removeItem(index)}">Delete</button>
        `
        
        
    } )
}
   


function removeItem(index){
    items = items.filter((_,i) => i != index)
    return items
}





form.addEventListener("submit", (e) =>{
    e.preventDefault()
    addItems()
    renderItems()

})



