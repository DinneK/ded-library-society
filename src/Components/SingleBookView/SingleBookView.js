// React and React Router
import React, { useState, useEffect } from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";

// Components and local files
import "./SingleBookView.css";
import { fetchSingleBook } from "../../apiCalls";

const SingleBookView = ({ trendingBooks, singleBookId }) => {
  const [currentBook, setCurrentBook] = useState({});
  const dispatch = useDispatch();
  const booksArr = useSelector((state) => state.savedBooks);
  const bookID = `/works/${singleBookId}`;

  useEffect(() => {
    fetchSingleBook(singleBookId).then((data) => {
      setCurrentBook(data);
    });
  }, [singleBookId]);

  const findDetails = trendingBooks.find(
    (book) => book.key === currentBook.key
  );

  if (!currentBook && !findDetails) {
    return <h1>Please waiting while we load your book...</h1>;
  }
  if (currentBook.covers && !booksArr.savedBooks.includes(bookID)) {
    return (
      <div className="single-book-container">
        <div className="single-book-view">
          <div className="image-container">
            <img
              className="single-book-image"
              src={ `https://covers.openlibrary.org/b/id/${String(
                currentBook.covers[0]
              )}-M.jpg` }
              alt={ `${currentBook.title} Cover` }
            />
          </div>
          <div className="description-container">
            <h2 className="single-book-title">
              { currentBook.title.toUpperCase() }
            </h2>
            <h3>Author: { findDetails.author_name }</h3>
            <h3>Genre: { currentBook.subjects[0] }</h3>
            <h3>First Published: { findDetails.first_publish_year }</h3>
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
          <button
            className="save-delete-button"
            onClick={ () => dispatch(saveBook(currentBook.key)) }
          >
            ❤️
          </button>
        </div>
      </div>
    );
  }
  if (currentBook.covers && booksArr.savedBooks.includes(bookID)) {
    return (
      <div className="single-book-container">
        <div className="single-book-view">
          <div className="image-container">
            <img
              className="single-book-image"
              src={ `https://covers.openlibrary.org/b/id/${String(
                currentBook.covers[0]
              )}-M.jpg` }
              alt={ `${currentBook.title} Cover` }
            />
          </div>
          <div className="description-container">
            <h2 className="single-book-title">
              { currentBook.title.toUpperCase() }
            </h2>
            <h3>Author: { findDetails.author_name }</h3>
            <h3>Genre: { currentBook.subjects[0] }</h3>
            <h3>First Published: { findDetails.first_publish_year }</h3>
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
          <button
            className="save-delete-button"
            onClick={ () => dispatch(deleteBook(currentBook.key)) }
          >
            🗑
          </button>
        </div>
      </div>
    );
  }
};

export default SingleBookView;
