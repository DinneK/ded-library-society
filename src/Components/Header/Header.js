import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>The D.E.D. Library Society</h1>
      <div className="header-button-container">
        <Link to="/books/saved">
          <button className="header-button">Your Favorites</button>
        </Link>
        <Link to="/">
          <button className="header-button">Home</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
