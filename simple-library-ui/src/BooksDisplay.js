import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import "./BooksDisplay.css";


function BooksDisplay(booksData) {
    
    return(
    booksData ? (
        <div>
            <div className="BookContainerContainer">
                {booksData.map((book) => (
                    <div className="BookContainer" key={book.id}>
                        <FontAwesomeIcon icon={faBook} size="2xl" />
                        <div>
                        <p>ID: {book.id}</p>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <p>Loading...</p>
    )
    )
}

export default BooksDisplay;