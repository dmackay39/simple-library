import React, { useEffect, useState, useRef } from 'react';
import BooksDisplay from './BooksDisplay';

const DeleteBook = () => {
    const [submitClicked, setSubmitClicked] = useState(0);
    const [chosenId, setChosenId] = useState(1);
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
            const deleteBook = async () => {
                try {
                    const options = {method:'DELETE'};
                    const response = await fetch('http://localhost:8080/book/'+chosenId, options);
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error fetching data: ', error);
                }
                fetchData();
            };
            deleteBook();
        }
        hasPageBeenRendered.current = true;
    }, [submitClicked]
    );

    return (
        <div>
            <h1>
                Welcome to the section where you can delete a book!
            </h1>
            {BooksDisplay(booksData)}
            <b>
                Select the id of the book you want to delete below.
            </b>
            <input
                type="text"
                value={chosenId}
                onChange={(e) => setChosenId(e.target.value)}
            />
            <button onClick={(e) => setSubmitClicked(submitClicked+1)}>
                Submit
            </button>
        </div>
    )
}

export default DeleteBook;