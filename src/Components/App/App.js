import React, { useState, useEffect } from "react";
import mockTrendingBooks from "../../mockTrendingBooks";
import {
  mockCoverImage1,
  mockCoverImage2,
  mockCoverImage3,
  mockCoverImage4,
  mockCoverImage5,
} from "../../mockCoverImages";
import "./App.css";
import BookContainer from "../BooksContainer/BooksContainer";

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

  return (
    <main>
      <h1>D.E.D. Library Society</h1>
      <BookContainer trendingBooks={trendingBooks} coverImages={coverImages} />
    </main>
  );
};

export default App;
