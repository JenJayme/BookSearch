//NAVBAR COMPONENT

import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    console.log("Engaging navbar component...");
    return (

    <Navbar bg="light" expand="lg">
      <h1 href="#home">React-Bootstrap</h1>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#link">Saved</Nav.Link>
        </Nav>
    </Navbar>
      
    )
}

export default NavBar;