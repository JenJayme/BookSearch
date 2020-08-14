//NAVBAR COMPONENT

import React from "react";
import { Navbar, Nav, Nav.Link } from 'react-bootstrap/Navbar';

function NavBar() {
    console.log("Engaging navbar component...");
    return (
      <div>

    <Navbar bg="light" expand="lg">
      <h1 href="#home">React-Bootstrap</h1>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Search</Nav.Link>
          <Nav.Link href="#link">Saved</Nav.Link>
        </h1>
      </div>
      
    )
}

export default NavBar;