import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import { fetchTrending } from '../../apiCalls';

const App = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(data => setTrendingBooks(data.works));
  }, []);

  return (
    <main className="App">
      <Switch>
        <Route
          exact
          path='/'
          render={ () => {
            return (
              <section>
                <Header />
                <div className="book-container">
                  <BookContainer trendingBooks={ trendingBooks } />
                </div>
              </section>
            );
          } }
        />
        <Route
          path='/books/works/:id'
          render={ ({ match }) => {
            return (
              <section>
                <Header />
                <div className="book-container">
                  <SingleBookView singleBookId={ match.params.id } trendingBooks={ trendingBooks } />
                </div>
              </section>
            );
          } }
        />
      </Switch>
    </main>
  );
};

export default App;
