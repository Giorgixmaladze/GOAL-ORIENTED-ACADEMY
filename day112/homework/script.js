const form  = document.querySelector("form")
const search =  document.querySelector("input")
const butt = document.querySelector("button")
const div = document.querySelector("div")
function renderCryptoData(data){
    div.innerHTML += `
        <div>
            <h1>Crypto coin name:${data[0].name}</h1>
            <img src ="${data[0].image}">
            <p>Price change: ${data[0].price_change_percentage_24h}
            <p>Price change 24h: ${data[0].price_change_24h}</p>

        </div>
    `
}

const fetchCryptoData = async (crypto) => {
    try {
        
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`)
        const data = await response.json();
        renderCryptoData(data)
        console.log(data)
    } catch (error) {
        console.log("Error fetching crypto data:", error)
    }
};


butt.addEventListener("click",(e) =>{
    e.preventDefault()
    if(search.value === ""){
        console.error("input cannot be empty")
    }else{
        fetchCryptoData(search.value)
    }
    
})