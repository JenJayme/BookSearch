import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from '../components/navbar';
import MyJumbotron from '../components/jumbotron';
import Results from '../components/results';
import API from '../utils/API';
import BookDetail from '../components/book-detail';
// import DeleteButton from '../components/deleteButton';

class SavedPage extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        API.getBooks().then((books) => {
            console.log(books.data)
            this.setState({ results: books.data })
        })
    }

    //can we grab the input from the search page and run the same api query function here, get the id 

    //need to change the button text & function on book detail from save to delete

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h3 className="heading">My Saved Books</h3>
                    </div>
                        {this.state.results.map((book, index) => {
                            return (
                                <>
                                <BookDetail
                                title = {book.title}
                                author = {book.authors}
                                image = {book.image}
                                link = {book.link}
                                description = {book.description}
                                id = {book._id}
                                all = {this.state.results}
                                index = {index}
                                button = {"Delete"}
                                handle = {this.removeClick}
                                deleted
                                />
                                </>
                            );
                        })}
                </Container>
            </div>
        )
    }
}

export default SavedPage;