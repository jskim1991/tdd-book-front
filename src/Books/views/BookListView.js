import React, {useEffect, useState} from 'react';

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import BookRepository from "../components/BookRepository";

const BookListView = () => {

    const [books, setBooks] = useState([]);

    function getBooksFromRepository() {
        const books = BookRepository.getBooks();
        setBooks(books);
        console.log(books);
    }

    useEffect(() => {
        getBooksFromRepository();
    }, []);

    return (
        <TableContainer component={Paper} >
            <Table m={3}>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Book ID</TableCell>
                        <TableCell align='center'>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        Array.isArray(books) && books.length ?
                            books.map(book => (
                                <TableRow key={book.id}>
                                    <TableCell align='right'>{book.id}</TableCell>
                                    <TableCell align='right'>{book.title}</TableCell>
                                </TableRow>
                            )) : null
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default BookListView;