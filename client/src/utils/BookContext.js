import React from "react";
import Render from "react-dom";

const BookContext = React.createContext({
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
});

export default BookContext;

// * `title` - Title of the book from the Google Books API

// * `authors` - The books's author(s) as returned from the Google Books API

// * `description` - The book's description as returned from the Google Books API

// * `image` - The Book's thumbnail image as returned from the Google Books API

// * `link` - The Book's information link as returned from the Google Books API
