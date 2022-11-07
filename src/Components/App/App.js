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

const App = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending().then((data) => {
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
                  { loading && <Loading /> }
                  { !loading && <BookContainer trendingBooks={ trendingBooks } /> }
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
              <section>
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
              <section>
                { loading && <Loading /> }
                { !loading && <SearchResultsContainer searchResults={ searchResults } /> }
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
