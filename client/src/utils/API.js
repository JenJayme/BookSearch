import axios from "axios";

export default {

   getBooks: function() {
    return axios.get("/api/books");
  },

  searchBooks: function(title){
      return axios.get("https://www.googleapis.com/books/v1/volumes?q="+title);
  },

  saveBook: function(book){
      return axios.post("/api/books",book)
  },

  deleteBook: function(id) {
    return axios.delete('/api/books/' + id);
  }
}