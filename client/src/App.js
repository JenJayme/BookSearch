import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import SavedPage from "./pages/Saved";
import SearchPage from "./pages/Search";


function App() {

  return (
    <Router>
      <div>
        <NavBar/>
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route exact path="/saved" component={SavedPage}/>
        </Switch>
        {/* <SearchPage /> */}
        {/* <SavedPage /> */}
      </div>
    </Router>
  )
}

export default App;
