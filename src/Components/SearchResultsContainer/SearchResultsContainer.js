import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import BooksContainer from "../BooksContainer/BooksContainer";
import BookCard from "../BookCard/BookCard";
import "./SearchResultsContainer.css";

//Import book card
//on the onClick for the search an API call is made
//the onClick needs to route to SearchResultsContainer
//Route needs to be built in App.js
//A link to the searchResultsContainer needs to go to wrap around the search button in search form
//The search results container the access the BooksContainer to render cards

const SearchResultsContainer = ({ searchResults }) => {
  console.log(searchResults);
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
  return <section className="book-container">{bookCards}</section>;
};

export default SearchResultsContainer;
