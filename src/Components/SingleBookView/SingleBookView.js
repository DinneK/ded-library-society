import React, {useState, useEffect} from 'react'
// import { fetchDescriptions } from '../../apiCalls'

const SingleBookView = ({ trendingBooks, descriptions, singleBookId }) => {

    // const [bookDescriptions, setbookDescriptions] = useState([]);
    
    // useEffect(() => {
    //     fetchDescriptions()
    //     .then(data => console.log(data))
    // }, [bookDescriptions])
    // console.log(bookDescriptions)

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