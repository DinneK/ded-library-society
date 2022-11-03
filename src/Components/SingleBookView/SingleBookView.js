import React, { useState, useEffect } from 'react';
import { fetchSingleBook } from '../../apiCalls';
// import BookCard from '../BookCard/BookCard';

const SingleBookView = ({ trendingBooks, singleBookId }) => {
    const [currentBook, setCurrentBook] = useState({});

    useEffect(() => {
        fetchSingleBook(singleBookId)
            .then(data => {
                setCurrentBook(data);
            });
    }, [singleBookId]);

    const findDetails = trendingBooks.find(book => book.key === currentBook.key);

    if (!currentBook && !findDetails) {
        return <h1>Please waiting while we load your book...</h1>;
    }
    if (currentBook.covers) {
        return (
            <div className='single-book-view'>
                <img
                    src={ `https://covers.openlibrary.org/b/id/${String(currentBook.covers[0])}-M.jpg` }
                    alt={ `${currentBook.title} Cover` } />
                <h2>{ currentBook.title }</h2>
                <h3>{ findDetails.author_name }</h3>
                <h3>{ currentBook.subjects[0] }</h3>
                <h3>{ findDetails.first_publish_year }</h3>
                <p>{ currentBook.description
                    ? currentBook.description.value
                    : !currentBook.description
                    && <span>Oh darn! It looks like you'll need to read this book to see what it's all about</span>
                }</p>
            </div>
        );
    }

};

export default SingleBookView;;