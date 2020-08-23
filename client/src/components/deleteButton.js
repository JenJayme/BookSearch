import React from 'react';
import { Button } from 'react-bootstrap';
import API from "../utils/API"

function DeleteButton(props) {
    // const { results } = useContext(BookContext);
    var bookId = props.bookId;
    var deleteClick = (event) =>{
        API.deleteBook(bookId).then(()=>{
            console.log("success")
            alert("Book Deleted");
            window.location.reload();
        });
    }
    return(
        <Button value = {props.bookId} onClick = {deleteClick}>Delete</Button>
    )
}
export default DeleteButton