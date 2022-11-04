import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";
import saveBookSlice from "../../features/saveBook/saveBookSlice";

const BookCard = ({ id, cover, title }) => {
  const dispatch = useDispatch();
  const booksArr = useSelector((state) => state.savedBooks);

  if (!booksArr.savedBooks.includes(id)) {
    return (
      <div>
        <Link to={`/books${id}`} className="book-card" id={id} key={id}>
          <img src={cover} alt={`${title} Book Cover`} />
          <h2>{title}</h2>
        </Link>
        <button onClick={() => dispatch(saveBook(id))}>❤️</button>
      </div>
    );
  }
  if (booksArr.savedBooks.includes(id)) {
    return (
      <div>
        <Link to={`/books${id}`} className="book-card" id={id} key={id}>
          <img src={cover} alt={`${title} Book Cover`} />
          <h2>{title}</h2>
        </Link>
        <button onClick={() => dispatch(deleteBook(id))}>🗑</button>
      </div>
    );
  }
};

export default BookCard;
