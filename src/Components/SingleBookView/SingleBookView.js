import React, { useState, useEffect } from "react";
import { fetchSingleBook } from "../../apiCalls";
// import BookCard from '../BookCard/BookCard';
import { useSelector, useDispatch } from "react-redux";
import { saveBook, deleteBook } from "../../features/saveBook/saveBookSlice";

const SingleBookView = ({ trendingBooks, singleBookId }) => {
  const [currentBook, setCurrentBook] = useState({});
console.log({currentBook})
  const dispatch = useDispatch();
  const booksArr = useSelector(state => state.savedBooks)
  const bookID = `/works/${singleBookId}`

  useEffect(() => {
    fetchSingleBook(singleBookId).then((data) => {
      setCurrentBook(data);
    });
  }, [singleBookId]);
  console.log(singleBookId)

  const findDetails = trendingBooks.find(
    (book) => book.key === currentBook.key
  );


  if (!currentBook && !findDetails) {
    return <h1>Please waiting while we load your book...</h1>;
  }
  //&& !booksArr.savedBooks.includes(`/works/${singleBookId}`)
  if (currentBook.covers && !booksArr.savedBooks.includes(bookID)) {
    return (
      <div className="single-book-view">
        <div>

            <img
            src={`https://covers.openlibrary.org/b/id/${String(
                currentBook.covers[0]
            )}-M.jpg`}
            alt={`${currentBook.title} Cover`}
            />
            <h2>{currentBook.title}</h2>
            <h3>{findDetails.author_name}</h3>
            <h3>{currentBook.subjects[0]}</h3>
            <h3>{findDetails.first_publish_year}</h3>
            <p>
            {currentBook.description
                ? currentBook.description.value || currentBook.description
                : !currentBook.description && (
                    <span>
                    Oh darn! It looks like you'll need to read this book to see
                    what it's all about
                    </span>
                )}
            </p>
        </div>
        <button onClick={() => dispatch(saveBook(currentBook.key))}>❤️</button>
      </div>
    )
    }
    console.log(booksArr)
    if(booksArr.savedBooks.includes(bookID)) {
        return (
            <div className="single-book-view">
              <div>
      {console.log(currentBook)}
                  <img
                  src={`https://covers.openlibrary.org/b/id/${String(
                      currentBook.covers[0]
                  )}-M.jpg`}
                  alt={`${currentBook.title} Cover`}
                  />
                  <h2>{currentBook.title}</h2>
                  <h3>{findDetails.author_name}</h3>
                  <h3>{currentBook.subjects[0]}</h3>
                  <h3>{findDetails.first_publish_year}</h3>
                  <p>
                  {currentBook.description
                      ? currentBook.description.value || currentBook.description
                      : !currentBook.description && (
                          <span>
                          Oh darn! It looks like you'll need to read this book to see
                          what it's all about
                          </span>
                      )}
                  </p>
              </div>
              <button onClick={() => dispatch(deleteBook(currentBook.key))}>🗑</button>
            </div>
          );
          
    }
};

export default SingleBookView;
