import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Book from '../../components/Book';

export default function Dashboard() {
    const [books, setBooks] = useState([])

    const handleSearchTerm = () => {
        var term = document.getElementById('search-term').value;

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term.replace(/ /g, '+')}:keys&key=AIzaSyDpOsib97FV4JrcxzlHILT7kiLN64GT2bQ`)
            .then(res => setBooks(res.data.items));
    }

    return (
        <div className="App">
            <div className="container">
                <h1 className="mt-4">Search for a Book</h1>
                <div className="input-group mb-3 mt-3">
                    <input type="text" name="search" className="form-control" id='search-term' placeholder="Enter search term" required="" />
                    <div className="input-group-append">
                        <button type="button" className="btn btn-primary" onClick={handleSearchTerm}>Search</button>
                    </div>
                </div>
                {
                    books.map((index, i) => {
                        return (<Book key={i} book={index} />)
                    })
                }
            </div>
        </div>
    );
};