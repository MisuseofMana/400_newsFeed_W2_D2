import React from 'react';

function SearchResult (props) {
    return (
        <li>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>{props.url}</p>
            <p>{props.points}</p>
            <p>{props.date}</p>
        </li>
    )
}

export default SearchResult;