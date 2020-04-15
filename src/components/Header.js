import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import "./Header.css"
function Header() {
  return (
   
    <div className="Head">
        <Link to="/weather"><h2>Weather Info</h2></Link>
        <Link to="/about"><h2>About</h2></Link>
        <a className = "openweather" href="https://openweathermap.org/">Source</a>   
    </div>

    
  );
}

export default Header;