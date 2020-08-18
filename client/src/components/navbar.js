//NAVBAR COMPONENT

import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    console.log("Engaging navbar component...");
    return (

    <Navbar bg="green" expand="lg">
      <h3 href="#home">Google Books</h3>
        <Nav className="mr-auto">
          <Nav.Link href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
    </Navbar>
      
    )
}

export default NavBar;