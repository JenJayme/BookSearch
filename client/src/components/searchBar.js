import React from "react";
import Button from 'react-bootstrap/Button';
// import searchBooks from "../utils/API"

export default function SearchBar(props) {


  return (
    <div className="form-group">
        Search for a book...
      <input className="form-control"   />
      <Button {...props} className="btn btn-success">
    </Button>
    </div>
  );
}
