import React, { useContext } from "react";
import Render from "react-dom";
import { Row, Col, Button } from 'react-bootstrap/';
// import BookContext from "../utils/BookContext"
import SaveButton from "./saveButton";
import DeleteButton from './deleteButton'

function BookDetail(props) {
    // const { results } = useContext(BookContext);
    return (
        <div>
            <Col>
                <Row>
                    <Col className="left"><h3>{props.title}</h3>
                    <h5>{props.author}</h5>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Button className="mr-2" target = "_blank" href={"https://books.google.com/books?id="+props.id}>View</Button>
                        {/* <Button value = {props.id} onClick = {props.handle}>{props.button}</Button> */}
                        {props.saved ? <SaveButton
                            id = {props.id}
                            all = {props.all}
                        />: null}
                        {props.deleted ? <DeleteButton bookId={props.id} /> : null}
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <img src={props.image}></img>
                    </Col>
                    <Col md={10}>
                        <p>{props.description} </p>
                        <p>LINK: {props.link}</p>
                        <p>id: {props.id}</p>
                    </Col>
                    
                </Row>
            </Col>
            <hr></hr>
            <br></br>
        </div>
        )
}

export default BookDetail; 

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API

