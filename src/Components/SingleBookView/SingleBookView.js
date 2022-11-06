import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";
import "./SingleBookView.css";
import { fetchSingleBook } from "../../apiCalls";

const SingleBookView = ({ trendingBooks, singleBookId, searchResults }) => {
  const [currentBook, setCurrentBook] = useState({});
  const bookList = useSelector((state) => state.savedBooks);
  const dispatch = useDispatch();
  const bookID = `/works/${singleBookId}`;

  useEffect(() => {
    fetchSingleBook(singleBookId).then((data) => {
      setCurrentBook(data);
    });
  }, [singleBookId]);

  const findTrendingDetails = trendingBooks.find(
    (book) => book.key === currentBook.key
  );

  const findSearchDetails = searchResults.find(
    (book) => book.key === currentBook.key
  );

  if (!currentBook && !findTrendingDetails && !findSearchDetails) {
    return <h1>Please waiting while we load your book...</h1>;
  }
  if (currentBook.covers && currentBook.subjects) {
    return (
      <div className="single-book-container">
        <div className="single-book-view">
          <div className="image-container">
            <img
              className="single-book-image"
              src={ `https://covers.openlibrary.org/b/id/${String(currentBook.covers[0])}-M.jpg` }
              alt={ `${currentBook.title} Cover` }
            />
          </div>
          <div className="description-container">
            <h2 className="single-book-title">
              { currentBook.title.toUpperCase() }
            </h2>
            <h3>
              Author:{ " " }
              { findTrendingDetails
                ? findTrendingDetails.author_name
                : findSearchDetails.author_name }
            </h3>
            <h3>Genre: { currentBook.subjects[0] }</h3>
            <h3>
              First Published:{ " " }
              { findTrendingDetails
                ? findTrendingDetails.first_publish_year
                : findSearchDetails.first_publish_year }
            </h3>
            <h3>Synopsis:</h3>
            <p>
              { currentBook.description
                ? currentBook.description.value || currentBook.description
                : !currentBook.description && (
                  <span>
                    Oh darn! It looks like you'll need to read this book to
                    see what it's all about
                  </span>
                ) }
            </p>
          </div>
        </div>
        <div className="save-styling">
          { !bookList.savedBooks.includes(bookID) && (
            <button
              className="save-delete-button"
              onClick={ () => dispatch(saveBook(currentBook.key)) }
            >❤️</button>
          ) }
          { bookList.savedBooks.includes(bookID) && (
            <button
              className="save-delete-button"
              onClick={ () => dispatch(deleteBook(currentBook.key)) }
            >🗑</button>
          ) }
        </div>
      </div>
    );
  }
};

export default SingleBookView;
