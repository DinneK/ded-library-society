import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>D.E.D. Library Society</h1>
      <Link to="/books/saved">
        <button className="save-list">Push Me</button>
      </Link>
    </header>
  );
};

export default Header;
