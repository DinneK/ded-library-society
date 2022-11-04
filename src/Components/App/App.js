import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import { fetchTrending } from "../../apiCalls";
import SavedBooksList from "../SavedBooksList/SavedBooksList";
import { useSelector, useDispatch } from "react-redux";

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
          render={() => {
            return (
              <section>
                <div className="book-container">
                  <BookContainer trendingBooks={trendingBooks} />
                </div>
              </section>
            );
          }}
        />
        <Route
          path="/books/works/:id"
          render={({ match }) => {
            console.log({ match });
            return (
              <section>
                <div className="book-container">
                  <SingleBookView
                    singleBookId={match.params.id}
                    trendingBooks={trendingBooks}
                  />
                </div>
              </section>
            );
          }}
        />
        {/* <Route
          path="/books/saved"
          render={({ match }) => {
            console.log({ match });
            return (
              <section>
                <div>
                  <SavedBooksList trendingBooks={trendingBooks} />
                </div>
              </section>
            );
          }}
        /> */}
      </Switch>
      <SavedBooksList trendingBooks={trendingBooks} />
    </main>
  );
};

export default App;
