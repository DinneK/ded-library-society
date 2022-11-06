//React and React Router
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// Components and local files
import "./SearchForm.css";

const SearchForm = ({ submitSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
  // const checkInput = () => {
  //   if (searchValue === "") {
  //     return setError("testing");
  //   }
  // };

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
        type="text"
        placeholder="enter book title or genre"
        name="title"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />

      <button onClick={(event) => helperSearch(event)}>Search</button>

      <p>{error}</p>
    </section>
  );
};

export default SearchForm;
