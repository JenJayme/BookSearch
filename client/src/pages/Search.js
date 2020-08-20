//SEARCH PAGE

import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';
import { SearchBar } from "../components/searchBar";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import API from "../utils/API"
import BookDetail from "../components/book-detail"
import BookContext from "../utils/BookContext"

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
                console.log(response)  
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
                {/* <BookContext.provider value= {this.state}> */}
                <Container>
                    <h3>Search Page</h3>
                <SearchBar 
                    setValue = {this.setValue}
                    handleClick= {this.handleClick}
                    />
                {this.state.results.map((book,index)=>{ 
                    return<BookDetail
                        title = {book.volumeInfo.title}
                        author = {book.volumeInfo.authors[0]}
                        image = {book.volumeInfo.imageLinks.thumbnail}
                        link = {book.volumeInfo.infoLink}
                        description = {book.volumeInfo.description}
                        id = {book.id}
                        all = {this.state.results}
                        index = {index}
                        button = {"Save"}
                        handle = {this.saveClick}
                    ></BookDetail>
                })}
                </Container>
                {/* </BookContext.provider> */}
                {/* <p>Book Details here</p> */}
            </div>
        )
    }  
    
}

export default Search;
