const form = document.querySelector("form");
const ol = document.getElementById("items");


items = []







form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const item = form.item.value;
    
    
    
    const li = document.createElement("li");
    
    li.textContent = item
    ol.appendChild(li)
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    li.appendChild(checkbox)
    items.push(item);
    console.log(items)
    localStorage.setItem('toDo',item)
    
    form.item.value = "";
})



ol.addEventListener("click", (e) =>{
    if(e.target.tagName === "LI"){
        e.target.remove()
    }
})

   
    
