import SearchedBook from '../searchedbook/searchedbook';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Results extends Component {
    constructor (props) {
        super();
        this.state = {

        }
    }


    componentDidMount () {
        
    }

    render() {

        return (
            <>
                <SearchedBook>

                </SearchedBook>
            </>
        )
    }
}

export default Results;