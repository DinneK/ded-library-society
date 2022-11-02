import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import mockTrendingBooks from "../../mockTrendingBooks";
import {
  mockCoverImage1,
  mockCoverImage2,
  mockCoverImage3,
  mockCoverImage4,
  mockCoverImage5,
} from "../../mockCoverImages";
import {
  description1, description2, description3, description4, description5
} from '../../mockDescriptions';
import "./App.css";
import BookContainer from "../BooksContainer/BooksContainer";
import SingleBookView from "../SingleBookView/SingleBookView";
import Header from "../Header/Header";

const App = () => {
  const mockBooks = mockTrendingBooks.works;
  const [trendingBooks, setTrendingBooks] = useState(mockBooks);

  const images = [
    mockCoverImage1,
    mockCoverImage2,
    mockCoverImage3,
    mockCoverImage4,
    mockCoverImage5,
  ];
  const [coverImages, setCoverImages] = useState(images);

  const descriptions = [
    description1,
    description2,
    description3,
    description4,
    description5
  ];
  const [bookDescriptions, setbookDescriptions] = useState(descriptions);

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
                  <BookContainer trendingBooks={ trendingBooks } coverImages={ coverImages } />
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
                  <SingleBookView singleBookId={ match.params.id } trendingBooks={ trendingBooks } coverImages={ coverImages } descriptions={ descriptions } />
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
