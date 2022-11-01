import React from "react";
import BookCard from "../BookCard/BookCard";
// import BookCard from "../BookCard/BookCard";
// import mockTrendingBooks from "../../mockTrendingBooks";
import "./BookContainer.css";

const BookContainer = ({ trendingBooks, coverImages }) => {
  console.log({ coverImages });
  const coverId = coverImages.map((coverImage) =>
    console.log(coverImage.length)
  );
  const bookCards = trendingBooks.map((trendingBook) => {
    console.log({ trendingBook });
    return <BookCard key={trendingBook.key} title={trendingBook.title} />;
  });

  return <section className="book-container">{bookCards}</section>;
};

export default BookContainer;
