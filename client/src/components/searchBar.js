// import React from "react";

// This file exports the Input, TextArea, and FormBtn components

// export function Input(props) {
//   return (
//     <div className="form-group">
//         Search for a book...
//       <input className="form-control" {...props} />
//       <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//     </div>
//   );
// }

import React from "react";
import Button from 'react-bootstrap/Button';
import searchBooks from "../utils/API"
export default function SearchBar(props) {
  const state = {
  }
  return (
    <div className="form-group">
        Search for a book...
      <input className="form-control" value  />
      <Button {...props} className="btn btn-success" onClick={searchBooks(value)}>
    </Button>
    </div>
  );
}