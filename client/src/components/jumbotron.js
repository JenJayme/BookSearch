//JUMBOTRON COMPONENT
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function MyJumbotron() {

  return (
    <div>
      <Jumbotron className="heroImg">

      <div className="heroTxt">
      <h1>Book Search</h1>
      <h4> Search for and Save Books of Interest </h4>
      <p>powered by React and Google Books API</p>
      </div>

      </Jumbotron>
    </div>
  )
}
export default MyJumbotron;

