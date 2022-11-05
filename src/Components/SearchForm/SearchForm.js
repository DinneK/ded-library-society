//React and React Router
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components and local files
import "./SearchForm.css";

const SearchForm = ({ submitSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const clearInputs = () => {
    setSearchValue("");
  };

  const helperSearch = () => {
    submitSearch(searchValue);
    clearInputs();
  };

  return (
    <section>
      <input
        type="text"
        placeholder="enter book title or genre"
        name="title"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Link to="/books/search">
        <button onClick={(event) => helperSearch(event)}>Search</button>
      </Link>
    </section>
  );
};

export default SearchForm;
