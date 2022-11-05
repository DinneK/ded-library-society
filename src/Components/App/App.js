import "./App.css";

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchTrending } from "../../apiCalls";

import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import SavedBooksList from "../SavedBooksList/SavedBooksList";

const App = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    fetchTrending().then((data) => setTrendingBooks(data.works));
  }, []);

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
                  <BookContainer trendingBooks={ trendingBooks } />
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
              <section>
                <div className="book-container">
                  <SingleBookView
                    singleBookId={ match.params.id }
                    trendingBooks={ trendingBooks }
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
                  trendingBooks={ trendingBooks }
                />
              </section>
            );
          } }
        />
      </Switch>
    </main>
  );
};

export default App;
