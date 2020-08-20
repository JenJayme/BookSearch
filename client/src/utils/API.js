import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  
  searchBooks: function(title){
      return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
  },
  saveBook: function(book){
      return axios.post("/api/books",book)
  }
  
}