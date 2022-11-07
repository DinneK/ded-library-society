import React from "react";
import { useSelector } from "react-redux";
import "./SavedBooksList.css";
import BookCard from "../BookCard/BookCard";

const SavedBooksList = ({ trendingBooks, searchResults }) => {
  const bookList = useSelector((state) => state.savedBooks);

  const displaySaved = (data) => {
    const showBooks = bookList.savedBooks.reduce((accBook, currBook) => {
      data.forEach((book) => {
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

      return accBook;
    }, []);

    return showBooks;
  };

  return (
    <section className="saved-books">
      {!bookList.savedBooks.length && <p>You Haven't Saved Any Books Yet!</p>}
      {trendingBooks && displaySaved(trendingBooks)}
      {searchResults && displaySaved(searchResults)}
    </section>
  );
};

export default SavedBooksList;
