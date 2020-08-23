//NAVBAR COMPONENT

import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function NavBar() {
    console.log("Engaging navbar component...");
    return (

    <Navbar expand="lg" variant="dark" className="nav">
      <Navbar.Brand href="#home"><h3>Google Books</h3></Navbar.Brand>
        <Nav variant="pills" defaultActiveKey="/search" className="mr-auto" >
          <Nav.Link eventKey="/" href="/">Search</Nav.Link>
          <Nav.Link href="/saved">Saved</Nav.Link>
        </Nav>
    </Navbar>
      
    )
}

export default NavBar;