import React, { useState, useEffect } from "react";
import "./weatherData.css"

function Weather(props){
    const [input, setInput] = useState('')
    const [cityData, setCityData] = useState({});
    const [cityZip, setCityTitle] = useState();
    // const apikey = `393db2c9cceb90d947389946e1acd3c2`;
    const cityUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&units=imperial&appid=393db2c9cceb90d947389946e1acd3c2`;
        useEffect(() => {
        const makeApiCall = async () => {
            const res = await fetch(cityUrl);
            const json = await res.json();
            console.log(json);
            setCityData(json);
        };
        makeApiCall();
    }, [cityZip]);

    const handleSubmit = e => {
        e.preventDefault();
        // props.handleSubmit(cityZip);
        setCityTitle(input);
    };

    const handleChange = e => {
        setInput(e.target.value)
    };
    console.log("WeatherInfo - props", props);
    
    let cityWeater = {

    }
if(cityData.name){
return (
    <div className = "weatherInfo">
        <section>
            <form onSubmit={handleSubmit}>
                Zip Code
                <input
                id="cityTitle"
                type="text"
                value={input}
                onChange={handleChange}
                />
                <input type="submit" value="submit" />
            </form>
            <div className = "render">
                <h1>here is info</h1>
                <h2>city: {cityData.name} </h2>
                <h3>temp: {cityData.main.temp}</h3> 
                <h3>Min Temp:{cityData.main.temp_min} &deg;F</h3>
                <h3>Max Temp:{cityData.main.temp_max} &deg;F</h3>
                <h3>Description:{cityData.weather[0].description} </h3>
                <img src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`} /> 
            </div>
        </section>
    </div>
    );
 } else { 
    return (
        <div className = "weatherInfo">
        <section>
            <form onSubmit={handleSubmit}>
                Zip Code
                <input
                id="cityTitle"
                type="text"
                value={input}
                onChange={handleChange}
                />
                <input type="submit" value="submit" />
            </form>
            <div className = "render">
            <h1>here is info</h1>
        <h2>city: N/A </h2>
        <h3>temp: N/A</h3> 
        <h3>Min Temp: N/A &deg;F</h3>
        <h3>Max Temp:N/A &deg;F</h3>
        <h3>Description:N/A </h3>
            </div>
        </section>
    </div>
    )
}
}
export default Weather;