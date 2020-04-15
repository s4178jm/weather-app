import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import WeatherInfo from "./components/weatherInfo";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
//   const [cityData, setCityData] = useState({});
//   const [cityZip, setCityTitle] = useState("");

//   //useEffect(() => {}, []);
//   //${word}

//   useEffect(() => {
//     const apikey = `393db2c9cceb90d947389946e1acd3c2`;
//     const cityUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${cityZip}&units=imperial&appid=${apikey}`;
//     const makeApiCall = async () => {
//       const res = await fetch(cityUrl);
//       const json = await res.json();
//       console.log(json);
//       setCityData(json);
//     };
//     makeApiCall();
//   }, [cityZip]);

//   const handleSubmit = async title => {
//     //console.log("my city zip on app ", cityZip);
//     setCityTitle(title);
//   };
// {/* <Form handleSubmit={handleSubmit} />
//       <WeatherInfo city={cityData} /> */}
  return (
    <div className="App">
      <h1>Weather APP</h1>
      <nav><Header /></nav>
      <div><Main/></div>
      <Footer/>
      
    </div>
  );
}
