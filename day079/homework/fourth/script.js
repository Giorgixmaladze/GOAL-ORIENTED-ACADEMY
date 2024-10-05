const color = document.getElementById("colors")

const block  = document.getElementById("block")

color.addEventListener("change",function(){
    const p1 = document.getElementById("p1")
     
    p1.textContent = `"your selected color is" ${color.value}`
    p1.style.color = `${color.value}`
})