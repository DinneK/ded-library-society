import React from "react";

const BookCard = ({ olid, cover, title }) => {
  return (
    <div className="book-card" key={ olid } id={ olid }>
      <img src={ cover } alt={ `${title} Book Cover` } />
      <h2>{ title }</h2>
      <button>❤️</button>
    </div>
  );
};

export default BookCard;
