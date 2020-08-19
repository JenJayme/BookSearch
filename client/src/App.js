import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyJumbotron from "./components/jumbotron";
import NavBar from "./components/navbar";
import SavedPage from "./pages/Saved";
import SearchPage from "./pages/Search";
import BookContext from "./utils/BookContext";
import Wrapper from "./components/wrapper";


function App() {

  // const [searchState, setSearchState] = useState({
  //   value: "",
  // });

  return (
    <Router>
      <div>
        <NavBar/>
        <Wrapper>
        <MyJumbotron />
        <BookContext.Provider>
        <Switch>
          <Route exact path="/" component={SearchPage}/>
          <Route exact path="/saved" component={SavedPage}/>
        </Switch>
        </BookContext.Provider>
        {/* <SearchPage /> */}
        {/* <SavedPage /> */}
        </Wrapper>
      </div>
    </Router>
  )
}

export default App;
