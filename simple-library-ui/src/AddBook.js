import React, { useEffect, useRef, useState } from 'react';
import BooksDisplay from './BooksDisplay';

const AddBook = () => {
    const [submitClicked, setSubmitClicked] = useState(0);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const hasPageBeenRendered = useRef(false);
    const [booksData, setBooksData] = useState(null);
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

    useEffect (() => {
        fetchData();
        if (hasPageBeenRendered.current) {
            const postBook = async () => {
                try {
                    const options = {method:'POST',headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"title":bookTitle, "author":bookAuthor})};
                    const response = await fetch('http://localhost:8080/book', options);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
                fetchData();
            };
            postBook();
        }
        hasPageBeenRendered.current = true;
    }, [submitClicked]
    );

    return (
        <div>
            <h1>
                Welcome to the section where you can add a book!
            </h1>
            {BooksDisplay(booksData)}
            <b>
                Use the below inputs to add a book.
            </b>
            <h2>
                Set book title:
            </h2>
            <input
                type="text"
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
            />
            <h2>
                Set book author:
            </h2>
            <input
                type="text"
                value={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
            />
            <button onClick={(e) => setSubmitClicked(submitClicked+1)}>
                Submit
            </button>
        </div>
    )
}

export default AddBook;