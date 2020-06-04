import React, { Component } from 'react';
import api from '../../utils/api';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert'


class SavedBook extends Component {
    constructor(props) {
        super();
        this.state = {
            books: []
        }
    }

    getSavedBooks() {
        api.retrieveSavedBooks({}).then(
            result => {
                console.log(result.data)
                // this.renderBooks(result.data)
                this.setState(
                    {
                        books: result.data
                    }
                )

                console.log(this.state)
            }
        )
    }

    deleteBook(isbn) {
        api.deleteBook(
            isbn
        ).then(
            result => {
                const success = result.data.success
                const message = result.data.message
                if(success) {
                    swal('Success', message,'success')
                } else {
                    swal('Oh no...', message,'warning')
                }
            }
        )
    }

    componentDidMount() {
        this.getSavedBooks();
    }


    render() {
        return (
            <div>
                {this.state.books.map(book => (
                    <Jumbotron key={book._id}>
                        Title: {book.title}
                        <br></br>
                        By:  {book.authors}
                        <br></br>
                        Link: {book.link}
                        <hr></hr>
                        <Button
                            onClick={
                                e => {
                                    this.deleteBook(book.isbn)
                                }
                            }
                        >
                            Delete Book
                        </Button>
                    </Jumbotron>
                ))}
            </div>
        )
    }
}

export default SavedBook;