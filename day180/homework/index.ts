const form = document.querySelector("form") as HTMLFormElement;
let colors:string[] = []

const addColor = (color) =>{

    if(colors.some(item => item === color)){
        return
    }
    colors.push(color)
}


const renderAllColors = (arr) =>{
    const div = document.createElement("div")
    
}


form.addEventListener("submit",(e) =>{
    e.preventDefault()
    const color = document.querySelector("input") as HTMLInputElement;
    addColor(color.value)

})