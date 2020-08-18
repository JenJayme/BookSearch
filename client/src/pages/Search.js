//SEARCH PAGE

import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';

export default function SearchPage() {
    return (
        <div>
            <h3>Search Page</h3>
            <Results />
            {/* <p>Book Details here</p> */}
        </div>
    )
}