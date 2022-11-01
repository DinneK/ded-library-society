import React from "react";

const BookCard = ({ olid, cover, title }) => {
  return (
    <div className="book-card" key={olid} id={olid}>
      <img>{cover}</img>
      <h2>{title}</h2>
      <button>❤️</button>
    </div>
  );
};

export default BookCard;
