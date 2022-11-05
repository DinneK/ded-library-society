//React and React Router
import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Components and local files
import "./SavedBooksList.css";
import BookCard from "../BookCard/BookCard";

const SavedBooksList = ({ trendingBooks, searchResults }) => {
  const booksArr = useSelector((state) => state.savedBooks);
  const bookList = 'trendingBooks' || 'searchResults'
  const displaySaved = (data) => {
    const showBooks = booksArr.savedBooks.reduce((accBook, currBook) => {
    data.forEach((book) => {
      console.log(data)
      if (book.key === currBook) {
        accBook.push(
            <BookCard
              key={ book.key }
              id={ book.key }
              cover={ `https://covers.openlibrary.org/b/id/${String(
                book.cover_i
              )}-M.jpg` }
              title={ book.title }
            />
        );
      }
    });
    return accBook;
  }, []);
  console.log(showBooks)
  return showBooks
}

  return (
    <section className="saved-books">
      {!booksArr.length && <p>You Haven't Saved Any Books Yet!</p>}
      { trendingBooks && displaySaved(trendingBooks)}
      {searchResults && displaySaved(searchResults)}
    </section>
  );
};

export default SavedBooksList;
