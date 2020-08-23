import React from "react";
import { Button } from 'react-bootstrap/';
// import BookContext from "../utils/BookContext"
import API from "../utils/API"

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
        const bookBody ={
            title :book[0].volumeInfo.title,
            authors : book[0].volumeInfo.authors,
            image : book[0].volumeInfo.imageLinks.thumbnail,
            link : book[0].volumeInfo.infoLink,
            description : book[0].volumeInfo.description,
        }
        API.saveBook(bookBody).then(()=>{
            console.log("success")
            alert("Book Saved");
        });
    }
    return(
        <Button value = {props.id} onClick = {saveClick}>Save</Button>
    )
}
export default SaveButton
