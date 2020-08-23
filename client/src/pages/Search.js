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
                {/* <BookContext.provider value= {this.state}> */}
                <Container>
                    <h3>Search Page</h3>
                <SearchBar 
                    setValue = {this.setValue}
                    handleClick= {this.handleClick}
                    />
                {this.state.results.map((book,index)=>{ 
                    var img;
                    var title;
                    var link;
                    var description;
                    var id;
                    var author;
                    if (!book.volumeInfo.imageLinks){
                        img = "#"
                    }
                    else{
                        img = book.volumeInfo.imageLinks.thumbnail
                    }
                    if(!book.volumeInfo.title){
                        title = "Title not found"
                    }
                    else{
                        title = book.volumeInfo.title
                    }
                    if (!book.volumeInfo.authors){
                        author = "No found authors"
                    }
                    else {
                        author = book.volumeInfo.authors[0]
                    }
                    if (!book.volumeInfo.infoLink){
                        link = "No link Found"
                    }
                    else {
                        link = book.volumeInfo.infoLink
                    }
                    if (!book.volumeInfo.description){
                        description = "No description found"
                    }
                    else{
                        description = book.volumeInfo.description
                    }
                    return<BookDetail
                        title = {title}
                        author = {author}
                        image = {img}
                        link = {link}
                        description = {description}
                        id = {book.id}
                        all = {this.state.results}
                        index = {index}
                        button = {"Save"}
                        handle = {this.saveClick}
                        saved
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
