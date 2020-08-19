
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
// import searchBooks from "../utils/API"

export const SearchBar = (props) => {

  // Grabs input from bar and assigns to var searchString
  function handleButtonClick(event) {
    let searchString;
    console.log("handleButtonClick: ", event.target.value);
    return searchString = event.target.value;
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="searchBar">
          <Form.Label>Search For</Form.Label>
          <Form.Control type="input"/>
          <Button type="submit" onClick={handleButtonClick}>Search</Button>
        </Form.Group>
      </Form>
    </div>
  );
}
 
export default SearchBar;