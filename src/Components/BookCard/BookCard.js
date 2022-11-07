import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";
import "./BookCard.css";
import emptyHeart from "../../assets/empty-heart.svg";
import filledHeart from "../../assets/filled-heart.svg";

const BookCard = ({ id, cover, title }) => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.savedBooks);

  return (
    <div className="book-card">
      <Link to={ `/books${id}` } className="card-single-link" id={ id } key={ id }>
        <img className="book-cover" src={ cover } alt={ `${title} Book Cover` } />
        <h2>{ title }</h2>
      </Link>
      { !bookList.savedBooks.includes(id) && (
        <button
          className="save-delete-button fav-button"
          onClick={ () => dispatch(saveBook(id)) }
        >
          <img src={ emptyHeart } alt="add favorite" />
        </button>
      ) }
      { bookList.savedBooks.includes(id) && (
        <button
          className="save-delete-button fav-button"
          onClick={ () => dispatch(deleteBook(id)) }
        >
          <img src={ filledHeart } alt="delete favorite" />
        </button>
      ) }
    </div>
  );
};

export default BookCard;
