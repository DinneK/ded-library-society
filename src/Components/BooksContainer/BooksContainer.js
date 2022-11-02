import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookContainer.css";

const BookContainer = ({ trendingBooks, coverImages }) => {
  const coverIds = coverImages.map((coverImage) => {
    return coverImage.split('/').reverse()[0].split('-')[0];
  });

  const bookCards = trendingBooks.reduce((cardList, book) => {
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
