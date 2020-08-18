import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';

export default function SavedPage() {
    return (
        <div>
            <h3>Saved Page</h3>
            <Results />
            {/* <p>Book Details here</p> */}
        </div>
    )
}