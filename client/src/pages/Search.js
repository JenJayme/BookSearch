//SEARCH PAGE

import React from 'react';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';
import { SearchBar } from "../components/searchBar";
import Container from "react-bootstrap/Container";
import axios from 'axios';
import searchBooks from "../utils/API"
import BookDetail from "../components/book-detail"

//pass onChange function from searchBar 

class Search extends React.Component {
    state = {
        inputVal:'',
        results:["ok","ok"]
    }
    setValue = event => {
        this.setState({inputVal:event.target.value});
    }
    handleClick = id => {
        id.preventDefault();
        console.log(id.target.value)
        alert(this.state.inputVal)
        const bookres = axios.get("https://www.googleapis.com/books/v1/books/volumes?q="+id.target.value)
        const res = bookres.items
        this.setState({results:res})

      }
    
    render(){
        return (
            <div>
                <Container>
                    <h3>Search Page</h3>
                    <SearchBar 
                    setValue = {this.setValue}
                    handleClick= {this.handleClick}
                    />
                {this.state.results.map((book)=>{ 
                    return<BookDetail
                        title = {book.title}
                        author = {book.author}
                        image = {book.image}
                        link = {book.link}
                    ></BookDetail>
                })}
                </Container>

                <Results />

                {/* <p>Book Details here</p> */}
            </div>
        )
    }  
    
}

export default Search;
