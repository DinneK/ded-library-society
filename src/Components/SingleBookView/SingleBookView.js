import React from 'react'

const SingleBookView = ({ trendingBooks, coverImages, descriptions, singleBookId }) => {

    const foundBook = trendingBooks.find(book => book.key === `/works/${singleBookId}`)

    const foundDesc = descriptions.find(desc => desc.key === `/works/${singleBookId}`) 

    return(
        <div className='single-book-view'>
            <img src={`https://covers.openlibrary.org/b/id/${String(foundDesc.covers[0])}-M.jpg`}/>
            <h2>{foundBook.title}</h2>
            <h3>{foundBook.author_name}</h3>
            <h3>{foundDesc.subjects[0]}</h3>
            <h3>{foundBook.first_publish_year}</h3>
            <p>{foundDesc.description ? foundDesc.description.value : !foundDesc.description && <span>Sorry</span>}</p>
        </div>
    )
}

export default SingleBookView