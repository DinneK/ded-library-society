import React from "react";
import "./BooksContainer.css";
import BookCard from "../BookCard/BookCard";

const BookContainer = ({ trendingBooks }) => {
  const coverIds = trendingBooks.map((book) => String(book.cover_i));

  const filteredBooks = trendingBooks.filter((book) => book.cover_i);

  const bookCards = filteredBooks.reduce((cardList, book) => {
    coverIds.forEach((coverId) => {
      if (String(book.cover_i) === coverId) {
        cardList.push(
          <BookCard
            key={ book.key }
            id={ book.key }
            cover={ `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` }
            title={ book.title }
          />
        );
      }
    });

    return cardList;
  }, []);

  return (
    <section className="book-container">
      { bookCards }
    </section>
  );
};

export default BookContainer;
