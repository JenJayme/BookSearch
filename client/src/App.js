import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import Saved from "./pages/Saved";
import Search from "./pages/Search";




function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
