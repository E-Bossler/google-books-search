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

    renderBooks(data) {
        
    }

    getSavedBooks() {
        api.retrieveSavedBooks({}).then(
            result => {
                console.log(result.data)
                this.renderBooks(result.data)
            }
        )
    }

    componentDidMount () {
        this.getSavedBooks();
    }

    render() {

        return (
            <Jumbotron>
                <hr></hr>
                <Button>
                    Delete Book
                </Button>
            </Jumbotron>
        )
    }
}

export default SavedBook;