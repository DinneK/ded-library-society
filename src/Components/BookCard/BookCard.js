import "./BookCard.css";

import React from "react";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";
// import saveBookSlice from "../../features/saveBook/saveBookSlice";

const BookCard = ({ id, cover, title }) => {
  const dispatch = useDispatch();
  const booksArr = useSelector((state) => state.savedBooks);


  return (
    <div>
      <Link to={ `/books${id}` } className="book-card" id={ id } key={ id }>
        <img src={ cover } alt={ `${title} Book Cover` } />
        <h2>{ title }</h2>
      </Link>
      { !booksArr.savedBooks.includes(id)
        && <button onClick={ () => dispatch(saveBook(id)) }>❤️</button> }
      { booksArr.savedBooks.includes(id)
        && <button onClick={ () => dispatch(deleteBook(id)) }>🗑</button> }
    </div>
  );
};

export default BookCard;
