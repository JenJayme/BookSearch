import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';

export default function SavedPage() {

    //can we grab the input from the search page and run the same api query function here, get the id 

    //need to change the button text & function on book detail from save to delete


    return (
        <div>
            <h3>Saved Page</h3>
            <Results />
            {/* <p>Book Details here</p> */}
        </div>
    )
}