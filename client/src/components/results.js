import React from "react";
import { Container, Table, Row, Col } from 'react-bootstrap/'
import BookDetail from "./book-detail";

export default function Results() {
    return (
        <Container>
            <Table>
                <Row>
                    <BookDetail />
                </Row>
            </Table>
        </Container>
    )
}