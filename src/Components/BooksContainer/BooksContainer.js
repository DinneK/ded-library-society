import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookContainer.css";

const BookContainer = ({ trendingBooks }) => {

  const coverIds = trendingBooks.map((book) => {
    return String(book['cover_i']);
  });

  const noDuplicates = trendingBooks.reduce((bookArr, book) => {
    if(book.cover_i) {
      bookArr.push(book)
    }
    return bookArr
  }, [])

  const bookCards = noDuplicates.reduce((cardList, book) => {
    coverIds.forEach(coverId => {
      if (String(book['cover_i']) === coverId) {
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
