//JUMBOTRON COMPONENT
import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

function MyJumbotron() {

  return (
    <Jumbotron>
      <div className="bannerImg"></div>
      {/* <img src="./books.jpg" alt="wall of antique books"></img> */}
      <h1 className="text-center">React Google Search</h1>
      <h4 className="text-center"> Search for and Save Books of Interest.</h4>
    </Jumbotron>
  )
}
export default MyJumbotron;

