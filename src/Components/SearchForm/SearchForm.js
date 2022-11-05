//React and React Router
import React, { useState, useEffect } from "react";

// Components and local files
import './SearchForm.css';
import { fetchSearch } from "../../apiCalls";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [ searchResults, setSearchResults] = useState([])

//   useEffect(() => {
//     fetchSearch()
//       .then(data => {
//         console.log(data)
//         setSearchResults(data.docs)
//       });
//   }, []);

//   console.log({searchResults})
//   const results = searchResults.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
//   console.log({results})

  const submitSearch = () => {
    fetchSearch(searchValue)
      .then(data => {
        console.log(data)
        setSearchResults(data.docs)
      });
    // const newSearch = {
    //   searchValue,
    // };
    // setSearchValue(newSearch);
    clearInputs();
  };
  //pagination --> own component for pagination, state of pagination would have page number in state
  // need to make future pages visible, and past pages

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
      <button onClick={ (event) => submitSearch(event) }>Search</button>
    </section>
  );
};

export default SearchForm;