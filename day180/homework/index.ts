const form = document.querySelector("form") as HTMLFormElement;
type Color ={
    name:string,
    isFavorite:boolean
}
let colors:Color[] = []
let favorites:Color[] = []

const addColor = (color) =>{

    if(colors.some(item => item === color)){
        return
    }
    colors.push({name:color,isFavorite:false})
    renderAllColors(colors)
}


const renderAllColors = (arr) =>{
   
    const div = document.querySelector("div");
    if (!div) return;

    div.innerHTML = ""; 
    const ul = document.createElement("ul");

    arr.forEach((color, index) => {
        const li = document.createElement("li");
        li.textContent = color.name;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "favorite";
        checkbox.checked = color.isFavorite;
        checkbox.addEventListener("change", () => addFavorite(index));

        li.appendChild(checkbox);
        ul.appendChild(li);
    });

    div.appendChild(ul);

}


const renderFavorites = (arr) =>{
    let div = document.createElement("div")
    let ul = document.createElement("ul")
    arr.forEach((color, index) => {
        const li = document.createElement("li");
        li.textContent = color.name;

        const button = document.createElement("button")
        button.textContent = "Delete favorite"
        button.onclick = deleteFavorite
        li.appendChild(button);
        ul.appendChild(li);
    });
    document.querySelector("body")?.appendChild(div)
}


const deleteFavorite = (index) =>{
    const updated = favorites.filter((_,i) => i !== index)
    favorites = updated
}

const addFavorite = (index: number) => {
  const color = colors[index];
  color.isFavorite = true;

  const alreadyFavorite = favorites.some(fav => fav.name === color.name);
  if (!alreadyFavorite) {
    favorites.push(color);
  }

  console.log("favorites:", favorites);
}


form.addEventListener("submit",(e) =>{
    e.preventDefault()
    const color = document.querySelector("input") as HTMLInputElement;
    addColor(color.value)
    
   
})
