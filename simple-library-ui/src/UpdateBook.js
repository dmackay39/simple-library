import React, { useEffect, useRef, useState } from 'react';
import BooksDisplay from './BooksDisplay';

const UpdateBook = () => {
    const [submitClicked, setSubmitClicked] = useState(0);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [bookId, setBookId] = useState('');
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
            const putBook = async () => {
                try {
                    const options = {method:'PUT',headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"id":bookId,"title":bookTitle, "author":bookAuthor})};
                    const response = await fetch('http://localhost:8080/book', options);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
                fetchData();
            };
            putBook();
        }
        hasPageBeenRendered.current = true;
    }, [submitClicked]
    );

    return (
        <div>
            <h1>
                Welcome to the section where you can update a book!
            </h1>
            {BooksDisplay(booksData)}
            <b>
                Use the below inputs to update a book.
            </b>
            <h2>
                Set book id:
            </h2>
            <input
                type="text"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
            />
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

export default UpdateBook;