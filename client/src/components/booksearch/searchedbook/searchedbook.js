import React, { Component } from 'react';
import api from '../../../utils/api'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import SearchedBook from './searchedbook/searchedbook'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'

class SearchedBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: this.props.authors,
            description: this.props.synopsis ,
            image: this.props.image,
            link: this.props.link,
            title: this.props.title,
            isbn: this.props.isbn
        }
    }

    handleSaveBook(e) {

        e.preventDefault();

        const authors = this.state.authors
        const description = this.state.synopsis 
        const image = this.state.image
        const link = this.state.link
        const title = this.state.title
        const isbn = this.state.isbn

        api.saveBook(
            authors, 
            description, 
            image, 
            link, 
            title, 
            isbn
        ).then(
            result => {
                const success = result.data.success
                console.log(result.data.message)
            }
        )
    }

    render() {

        return (
            <Jumbotron>
                Search Result:
                <hr></hr>
                <h4>
                    {this.props.title}
                </h4>
                By: {this.props.authors}
                <hr></hr>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={this.props.image} rounded />
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                Category: {this.props.category}
                <br></br>
                ISBN: {this.props.isbn}
                <br>
                </br>
                Publication Date: {this.props.pubDate}
                <br></br>
                Synopsis: {this.props.synopsis}
                <hr></hr>
                <Button
                    onClick={e => {
                        this.handleSaveBook(e)}
                    }
                >
                    Save this Book For Later!
                </Button>
            </Jumbotron>
        )
    }
}

export default SearchedBook;