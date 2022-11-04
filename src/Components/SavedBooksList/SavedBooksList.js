import React from "react";
import "./SavedBooksList.css";
import { useSelector } from "react-redux";
import BookCard from "../BookCard/BookCard";
import { Link } from "react-router-dom";

const SavedBooksList = ({ trendingBooks }) => {
  const booksArr = useSelector((state) => state.savedBooks);

  const displaySaved = booksArr.savedBooks.reduce((accBook, currBook) => {
    trendingBooks.forEach((book) => {
      if (book.key === currBook) {
        accBook.push(
          <Link to={`/books${book.key}`} className="book-cards">
          <BookCard
            key={book.key}
            id={book.key}
            cover={`https://covers.openlibrary.org/b/id/${String(
              book.cover_i
            )}-M.jpg`}
            title={book.title}
          />
          </Link>
        );
      }
    });
    return accBook;
  }, []);
  return (
    <section className="saved-books">
        {displaySaved}
    </section>
  );
};

export default SavedBooksList;
