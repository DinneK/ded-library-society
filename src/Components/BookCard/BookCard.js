import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";

const BookCard = ({ id, cover, title }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/books${id}`} className="book-card" id={id} key={id}>
      <img src={cover} alt={`${title} Book Cover`} />
      <h2>{title}</h2>
      <button onClick={() => dispatch(saveBook())}>❤️</button>
    </Link>
  );
};

export default BookCard;
