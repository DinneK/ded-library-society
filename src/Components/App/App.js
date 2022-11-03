import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
// import {
//   description1, description2, description3, description4, description5
// } from '../../mockDescriptions';
import "./App.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";
import { fetchTrending } from '../../apiCalls';

const App = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);

  // const descriptions = [
  //   description1,
  //   description2,
  //   description3,
  //   description4,
  //   description5
  // ];
  // const [bookDescriptions, setbookDescriptions] = useState(descriptions);

  useEffect(() => {
    fetchTrending()
      .then(data => setTrendingBooks(data.works));
  }, []);
  // console.log(trendingBooks)

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
                  {console.log('match', match.params.id)}
                  <SingleBookView singleBookId={ match.params.id } trendingBooks={ trendingBooks }/>
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
