import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchForm.css";

const SearchForm = ({ submitSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const clearInputs = () => {
    setSearchValue("");
  };

  const helperSearch = () => {
    if (!searchValue.trim()) {
      setError("Please Fill Out Field");
    } else {
      setError("");
      submitSearch(searchValue);
      history.push("/books/search");
      clearInputs();
    }
  };

  return (
    <section>
      <input
        className="search-input"
        type="text"
        placeholder="Enter book title"
        name="title"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        className="search-button"
        onClick={(event) => helperSearch(event)}
      >
        Search
      </button>
      <p>{error}</p>
    </section>
  );
};

export default SearchForm;
