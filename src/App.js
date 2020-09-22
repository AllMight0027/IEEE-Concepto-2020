import React from "react";

import "./App.css";
import Home from "./components/home/Home";
import Events from "./components/events/Events";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/event" exact>
          <Events />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
