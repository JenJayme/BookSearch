import React, { useContext } from "react";
import { Button } from 'react-bootstrap/';
// import BookContext from "../utils/BookContext"

function SaveButton(props) {
    // const { results } = useContext(BookContext);
    var allBooks = props.all
    var saveClick = (event) =>{
        event.preventDefault();
        var index = event.target.value;
        console.log(index);
        console.log(allBooks)
        const book = allBooks.filter(book => book.id === index);
        console.log(book);
    }
    return(
        <Button value = {props.id} onClick = {saveClick}>Save</Button>
    )
}
export default SaveButton
