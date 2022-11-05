import React, { useState, useEffect } from "react";
import './SearchForm.css';
import { fetchSearch } from "../../apiCalls";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchSearch()
      .then(data => console.log(data));
  }, []);

  const submitSearch = event => {
    event.preventDefault();
    const newSearch = {
      searchValue,
    };
    setSearchValue(newSearch);
    clearInputs();
  };

  const clearInputs = () => {
    setSearchValue('');
  };

  return (
    <section>
      <input
        type='text'
        placeholder='enter book title or genre'
        name='title'
        value={ searchValue }
        onChange={ event => setSearchValue(event.target.value) }
      />
      <button onClick={ submitSearch }>Search</button>
    </section>
  );
};

export default SearchForm;