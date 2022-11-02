import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ id, cover, title }) => {
  // console.log(id)
  return (
    // <div className="book-card" id={ id } key={ id }>
      <Link to={`/books${id}`} className="book-card" id={ id } key={ id }>
        <img src={ cover } alt={ `${title} Book Cover` } />
        <h2>{ title }</h2>
        <button>❤️</button>
      </Link>
      // </div>
  );
};

export default BookCard;
