const productElement = document.getElementById("container"); 
const btn = document.getElementsByTagName("button");
const products = [
    {id:1,title: "Jacket"},
    {id:2,title:"Trousers"},
    {id:3,title:"Shirt"}
]


for(let x = 0; x <= btn.length - 1; x ++){
    btn[x].addEventListener("click",(e) => {

        for(let i = 0; i < products.length; i++ ){
    const elememtDiv = document.createElement("div");
    productElement.appendChild(elememtDiv);
    const element = document.createElement("p");
    element.textContent = `${products[i].id} ${products[i].title}`
    elememtDiv.append(element)
    
    }
})   
    
    
}
