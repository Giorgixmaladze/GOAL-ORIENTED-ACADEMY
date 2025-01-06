//`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
import { useEffect, useState } from "react";
import "./style.css"
function WeatherApi() {
    const [weather, setWeather] = useState([])
    const [temp, setTemp] = useState("Celcius")
    const [error, setError] = useState("")
    const apiKey = "61deb0ccf0dc931eeb1e8d6de62c7f8b"

    async function fetchData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await response.json()
            setWeather(data)
            console.log(data.weather[0].main)
        } catch (error) {
            console.error("Unable to fetch data")
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        const city = e.target.city.value
        const data = fetchData(city)
        setError("City not found")
        console.log(weather)
    }


    function tempConvert() {
        if (temp === "Celcius") {
            setTemp("Farenheit")
        } else {
            setTemp("Celcius")
        }
    }



    return (
        <main>
            <div id="main-div">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter the city" required name="city" />
                    <button>Get Weather</button>
                </form>



            {weather.cod === 200 ? (
                <div id="first-child">
                    <h2>{weather.name}</h2>
                    <p>Condition: {weather.weather[0].main}</p>
                    <p>Description: {weather.weather[0].description}</p>
                    <p>Temperature: {
                        temp === "Celcius" ?
                            `${Math.round(weather.main.temp)}C°`
                            : `${Math.round((weather.main.temp * 9 / 5) + 32)}F°`

                    }</p>
                    <div id="icon">
                        <button onClick={tempConvert}>{
                            temp === "Celcius" ?
                                `ToFarenheit`
                                : `ToCelcius`
                        }</button>

                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                    </div>
                </div>
            
            ) : <p>City can't found</p>
            }
            </div>
        </main>

    )
}

export default WeatherApi
