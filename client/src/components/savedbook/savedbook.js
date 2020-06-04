import React, { Component } from 'react';
import api from '../../utils/api';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button';


class SavedBook extends Component {
    constructor (props) {
        super();
        this.state = {

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

    componentDidMount () {
        this.getSavedBooks();
    }

    render() {
        this.getSavedBooks()
        return (
            <Jumbotron>
                {this.state.books.map()}
                <hr></hr>
                <Button>
                    Delete Book
                </Button>
            </Jumbotron>
        )
    }
}

export default SavedBook;