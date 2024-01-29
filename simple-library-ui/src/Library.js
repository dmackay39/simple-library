import React, { useEffect, useState } from 'react';
import BooksDisplay from './BooksDisplay';

const Library = () => {
    const [booksData, setBooksData] = useState(null);

    useEffect (() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/book');
                const data = await response.json();
                console.log(data);
                setBooksData(data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []
    );

    return (
        <div>
            <h1>
                Welcome to the Library!
            </h1>
            <b>
                Here you can view all books in the collection.
            </b>
            {BooksDisplay(booksData)}
        </div>
    )
}

export default Library;