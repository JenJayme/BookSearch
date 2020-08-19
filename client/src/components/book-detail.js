import React from "react";
import Render from "react-dom";
import { Row, Col, Button } from 'react-bootstrap/';

function BookDetail(props) {
    return (
        <div>
            <Col>
                <Row>
                    <Col className="left"><h3>{props.title}</h3>
                    <h5>{props.author}</h5>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }}>
                        <Button className="mr-2">View</Button>
                        <Button>Delete</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}>
                        <p><img src={props.image}></img></p>
                    </Col>
                    <Col md={10}>
                        <p>{props.description} </p>
                        <p>LINK: {props.link}</p>
                    </Col>
                    
                </Row>
            </Col>
        </div>
        )
}

export default BookDetail; 

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API

