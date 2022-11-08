import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { fetchTrending, fetchSearch } from "../../apiCalls";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedBooksList from "../SavedBooksList/SavedBooksList";
import SearchForm from "../SearchForm/SearchForm";
import SearchResultsContainer from "../SearchResultsContainer/SearchResultsContainer";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";

const App = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchTrending().then((data) => {
      if (data === undefined) {
        setError(true);
      }
      setTrendingBooks(data.works);
      setLoading(false);
    });
  }, []);

  const submitSearch = (inputValue) => {
    setLoading(true);
    fetchSearch(inputValue).then((data) => {
      setSearchResults(data.docs);
      setLoading(false);
    });
  };

  return (
    <main className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={ () => {
            return (
              <section>
                <div className="book-container">
                  <SearchForm submitSearch={ submitSearch } />
                  { error && !loading && <Error /> }
                  { !error && loading && <Loading /> }
                  { !error && !loading && <BookContainer trendingBooks={ trendingBooks } /> }
                </div>
              </section>
            );
          } }
        />
        <Route
          exact
          path="/books/works/:id"
          render={ ({ match }) => {
            return (
              <section className="rendering-for-single-book">
                <div className="book-container">
                  { error && <Error /> }
                  <SingleBookView
                    singleBookId={ match.params.id }
                    trendingBooks={ trendingBooks }
                    searchResults={ searchResults }
                  />
                </div>
              </section>
            );
          } }
        />
        <Route
          exact
          path="/books/saved"
          render={ () => {
            return (
              <section className="book-container">
                { error && <Error /> }
                <SavedBooksList
                  searchResults={ searchResults }
                  trendingBooks={ trendingBooks }
                />
              </section>
            );
          } }
        />
        <Route
          exact
          path="/books/search"
          render={ () => {
            return (
              <section className="book-container">
                <SearchForm submitSearch={ submitSearch } />
                { error && !loading && <Error /> }
                { !error && loading && <Loading /> }
                { !error && !loading && <SearchResultsContainer searchResults={ searchResults } /> }
              </section>
            );
          } }
        />
      </Switch>
      <Footer />
    </main>
  );
};

export default App;
