import React, { Component } from 'react';
import api from '../../../utils/api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import SearchedBook from './searchedbook/searchedbook'
import Jumbotron from 'react-bootstrap/Jumbotron'

class SearchedBook extends Component {
    constructor (props) {
        super();
        this.state = {

        }
    }

    getBook (title) {
        api.searchTitle(title).then(
            result => {
                // console.log(result.data.volumeInfo.title)
                console.log("Title: ", result.data.volumeInfo.title)
                console.log('Author(s): ', result.data.volumeInfo.authors)
                console.log('Category: ',result.data.volumeInfo.categories)
                console.log('Publication Date: ', result.data.volumeInfo.publishedDate)
                console.log('Synopsis: ', result.data.volumeInfo.description)
            }
        )
    }

    componentDidMount () {
        this.getBook("fahrenheit 451")
    }

    render() {

        return (
            <Jumbotron>

            </Jumbotron>
        )
    }
}

export default SearchedBook;