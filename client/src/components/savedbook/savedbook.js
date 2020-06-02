import React, { Component } from 'react';
import api from '../../utils/api.js';
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
                console.log(result)
            }
        )
    }

    componentDidMount () {
        // this.getSavedBooks();
    }

    render() {

        return (
            <Jumbotron>
                <Button
                    onClick={this.getSavedBooks}
                >
                    Test the API
                </Button>
                <hr></hr>
                <Button>
                    Delete Book
                </Button>
            </Jumbotron>
        )
    }
}

export default SavedBook;