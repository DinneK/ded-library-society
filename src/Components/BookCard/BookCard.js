import React from "react";
import { Link } from "react-router-dom";
import './BookCard.css';

const BookCard = ({ id, cover, title }) => {
  return (
    <Link to={ `/books${id}` } className="book-card" id={ id } key={ id }>
      <img src={ cover } alt={ `${title} Book Cover` } />
      <h2>{ title }</h2>
      <button>❤️</button>
    </Link>
  );
};

export default BookCard;
