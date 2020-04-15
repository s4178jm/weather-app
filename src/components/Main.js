import React from "react";
import About from "./About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Weather from "./weatherData";
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/weather" render={props => <Weather />}/>} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
}
export default Main;
