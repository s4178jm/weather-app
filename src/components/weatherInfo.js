import React from "react";

function WeatherInfo(props) {
  console.log("WeatherInfo - props", props);
  if (props.city) {
    return (
      <div>
        <h1>here is info</h1>
        <h2>city: {props.city.name} </h2>
        <h3>Min Temp:{props.city.main.temp_min} &deg;F</h3>
        <h3>Max Temp:{props.city.main.temp_max} &deg;F</h3>
        <h3>Description:{props.city.weather[0].description} </h3>
      </div>
    );
  } else {
    return (
      <div>
        <h1>here is info</h1>
        <h2>city: N/A </h2>
        <h3>Min Temp: N/A &deg;F</h3>
        <h3>Max Temp:N/A &deg;F</h3>
        <h3>Description:N/A </h3>
      </div>
    );
  }
}

export default WeatherInfo;
/*<h1>Location:{props.city.} </h1>

<h3>Description:{props.city.main} </h3>
<h3>Min Temp:{props.city.main} </h3>
<h3>Max Temp:{props.city.main} </h3>*/
//<h2>Current Temp: {props.city.main.temp} </h2>
