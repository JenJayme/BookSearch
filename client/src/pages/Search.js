//SEARCH PAGE

import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';
import { SearchBar } from "../components/searchBar";
import Container from "react-bootstrap/Container";

//pass onChange function from searchBar 

export default function SearchPage() {

    return (
        <div>
            <Container>
                <h3>Search Page</h3>
                <SearchBar />
            </Container>
            <Results />
            {/* <p>Book Details here</p> */}
        </div>
    )
}