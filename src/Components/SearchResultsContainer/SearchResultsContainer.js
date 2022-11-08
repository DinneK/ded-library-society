import React from "react";
import BookCard from "../BookCard/BookCard";
import "./SearchResultsContainer.css";

const SearchResultsContainer = ({ searchResults }) => {
  const coverIds = searchResults.map((book) => String(book.cover_i));
  const filteredBooks = searchResults.filter((book) => book.cover_i);

  const bookCards = filteredBooks.reduce((cardList, book) => {
    coverIds.forEach((coverId) => {
      if (String(book.cover_i) === coverId) {
        cardList.push(
          <BookCard
            key={book.key}
            id={book.key}
            cover={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
            title={book.title}
          />
        );
      }
    });

    return cardList;
  }, []);

  return (
    <section className="search-results-container">
      {!searchResults.length && (
        <p>No search results found. Please try again.</p>
      )}
      {searchResults && bookCards}
    </section>
  );
};

export default SearchResultsContainer;
