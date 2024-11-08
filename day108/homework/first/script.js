const profiles = document.getElementById("profiles");
const form = document.getElementById("myform")
const userName = form.elements.user
const butt = document.querySelector("button")

butt.addEventListener("click",(e) =>{
    e.preventDefault()
    const promise = fetch(`https://api.github.com/users/${userName.value}`)
    promise
        .then((response) => response.json())
        .then(renderItems)
        .catch(()=>console.error("Failed to fetch data"))
        
})


function renderItems(items){
    console.log(items)
    let div =  document.createElement("div");
    div.innerHTML += `
        <div>
            <p>Username:${items.login}</p>
            <a href = "${items.html_url}">Profile link</a>
        </div>
        `
    profiles.appendChild(div)
}

