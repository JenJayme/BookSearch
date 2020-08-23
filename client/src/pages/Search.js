//SEARCH PAGE

import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';
import { SearchBar } from "../components/searchBar";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import API from "../utils/API";
import BookDetail from "../components/book-detail";

//pass onChange function from searchBar 

class Search extends React.Component {
    state = {
        inputVal:'',
        results:[]
    }
    setValue = event => {
        this.setState({inputVal:event.target.value});
    }

    handleClick = id => {
        id.preventDefault();
        console.log(id.target.value)
        // alert(this.state.inputVal)

        API.searchBooks (this.state.inputVal)
        // alert("yes")
            .then(response => {   
                console.log(response.data.items)  
                // alert(response.items)           
                if (response.data.length === 0) {
                    throw new Error("No results found.");
                  }
                  if (response.data.status === "error") {
                    throw new Error(response.data.message);
                  }
                this.setState({results:response.data.items})
                // alert(this.state.results)
            })
            .catch(function(error){
                console.log(error)
                // alert("no")
            })
        }

    render(){
        return (
            <div>
                <Container>
                    <h3 className="heading">Search for a Book</h3>
                <SearchBar 
                    setValue = {this.setValue}
                    handleClick= {this.handleClick}
                    />
                {this.state.results.map((book,index)=>{ 
                    var img;
                    if (!book.volumeInfo.imageLinks){
                        img = "#"
                    }
                    else{
                        img = book.volumeInfo.imageLinks.thumbnail
                    }
                    return<BookDetail
                        title = {book.volumeInfo.title}
                        author = {book.volumeInfo.authors[0]} 
                        image = {img}
                        link = {book.volumeInfo.infoLink}
                        description = {book.volumeInfo.description}
                        id = {book.id}
                        all = {this.state.results}
                        index = {index}
                        button = {"Save"}
                        handle = {this.saveClick}
                        saved
                    ></BookDetail>
                })}
                </Container>
            </div>
        )
    }  
    
}

export default Search;
