import React, {useState, useEffect} from 'react'
import { fetchDescriptions } from '../../apiCalls'

const SingleBookView = ({ trendingBooks, singleBookId }) => {
    const [bookDescriptions, setbookDescriptions] = useState({});
    
    useEffect(() => {
        fetchDescriptions(singleBookId)
        .then(data => {
            setbookDescriptions(data)
        })
    }, [])

    if(!bookDescriptions) {
        return <h1>Loading</h1>
    }
    if(bookDescriptions.covers) {
        return(
            <div className='single-book-view'>
                <img src={`https://covers.openlibrary.org/b/id/${String(bookDescriptions.covers[0])}-M.jpg`}/>
                <h2>{bookDescriptions.title}</h2>
                {/* <h3>{foundBook.author_name}</h3> */}
                <h3>{bookDescriptions.subjects[0]}</h3>
                {/* <h3>{foundBook.first_publish_year}</h3> */}
                <p>{bookDescriptions.description ? bookDescriptions.description.value : !bookDescriptions.description && <span>Sorry</span>}</p>
            </div>
        )
    }

}

export default SingleBookView