import React from "react";
import { Container, Row, Col } from 'react-bootstrap/'
import BookDetail from "./book-detail";

export default function Results() {
    return (
        <Container>
                <Row>
                    <BookDetail />
                </Row>
        </Container>
    )
}