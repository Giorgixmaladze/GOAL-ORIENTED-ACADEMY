const form =  document.getElementById("myform");
const info = document.getElementById("movieData");
const movieName = form.elements.movie;
const butt = document.querySelector("button");

const api = `9a0643cb`



butt.addEventListener("click", (e)=>{
    e.preventDefault();
    const promise = fetch(`https://www.omdbapi.com/?t=${movieName.value}&apikey=${api}`)
    promise
        .then((response)=> response.json())
        .then(renderItems)
})


function renderItems(items){
    console.log(items)

    const div = document.createElement("div")
    div.innerHTML += 
        `
        <div>
            <img src = "${items.Poster}">
            <h3>Title: ${items.Title}</h3>  
            <p>Year: ${items.Year}  </p>
            <p>Plot: ${items.Plot}</p>
        
        
        
        </div>
        
        `
    info.append(div)
}