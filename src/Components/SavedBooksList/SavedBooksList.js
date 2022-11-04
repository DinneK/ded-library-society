import React, { useState, useEffect } from "react";
// import { Route, Switch } from "react-router-dom";
import "./SavedBooksList.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import { fetchTrending } from "../../apiCalls";
import saveBookSlice from "../../features/saveBook/saveBookSlice";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../features/saveBook/saveBookSlice";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";

// console.log(saveBookSlice);

const SavedBooksList = ({ trendingBooks }) => {
  const booksArr = useSelector((state) => state.savedBooks);
  const displaySaved = booksArr.savedBooks.reduce((accBook, currBook) => {
    trendingBooks.forEach((book) => {
      console.log({ book });
      if (book.key === currBook) {
        accBook.push(
          <BookCard
            key={book.key}
            id={book.key}
            cover={`https://covers.openlibrary.org/b/id/${String(
              book.cover_i
            )}-M.jpg`}
            title={book.title}
          />
        );
      }
    });
    console.log({ accBook });
    return accBook;
  }, []);
  console.log({ displaySaved });
  return (
    <section className="saved-books">
      {/* <Link to={`/books/saved`} className="book-cards"> */}
      {displaySaved}
      {/* </Link> */}
    </section>
  );

  // console.log(savedBooks);
  // from books container, favorite button could just save the id, title, and cover to render the savedBooksList view --> this will be an array of objects
  // From the savedBooksList view we could direct them to the singleBookView, we could conditionally render the button to now be a trash can so they can delete the book from the savedBooksList, can put deleteBook reducer on the trash can icon
  // could access the savedBooks array and say if the id exists in the savedBooks array then render the button as a trash can not a heart

  // ?
  // if we save the id when we favorite books, savedBooks could be an array of ids, then when we render the savedBooks component we could map over ids making the fetch singleBook call, and that can render the savedBooks array
  // ?

  // savedBooks.map(id => {
  // this would render just the covers and title
  // onClick we'd show the singleBookView, sans heart button
  // })
};

export default SavedBooksList;
