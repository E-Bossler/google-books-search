import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import SearchedBook from './searchedbook/searchedbook'
import Results from './results/results';
import api from '../../utils/api'

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            authors: '',
            category: '',
            pubDate: '',
            synopsis: '',
            link: '',
            image: '',
            isbn13: ''
        }
    }



    setInState(info) {
        try {

            const title = info.title;
            const authors = info.authors
            const category = info.category
            const pubDate = info.pubDate
            const synopsis = info.synopsis
            const link = info.link
            const image = info.image
            const isbn13 = info.isbn

            this.setState(
                {
                    title: title,
                    authors: authors,
                    category: category,
                    pubDate: pubDate,
                    synopsis: synopsis,
                    link: link,
                    image: image,
                    isbn13: isbn13
                }
            )
        } catch (err) {
            console.log(`Error: ${err}`);
        }
    }

    getBook(title) {
        api.searchTitle(title).then(
            result => {
                // console.log(result.data)
                const info = {
                    'title': result.data.volumeInfo.title,
                    'authors': result.data.volumeInfo.authors,
                    'category': result.data.volumeInfo.categories,
                    'pubDate': result.data.volumeInfo.publishedDate,
                    'synopsis': result.data.volumeInfo.description,
                    'link': result.data.volumeInfo.canonicalVolumeLink,
                    'image': result.data.volumeInfo.imageLinks.thumbnail,
                    'isbn': result.data.volumeInfo.industryIdentifiers[0].identifier
                }

                console.log(info)

                this.setInState(info)
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        const title = document.getElementById('title-input').value;
        this.getBook(title);
    }

    componentDidMount() {
        this.getBook('The Cat in the Hat')
    }

    render() {

        return (
            <>
                <Jumbotron>
                    <Container>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Search for a Book</Form.Label>
                                <Form.Control type="text" id='title-input' placeholder="ex: Fahrenheit 451" />
                                <Form.Text className="text-muted">
                                    Pick a good one!
                    </Form.Text>
                            </Form.Group>
                            <Button
                                variant="primary"
                                onClick={
                                    e => {
                                        this.handleSubmit(e)
                                    }
                                }
                                type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Container>
                </Jumbotron>

                <SearchedBook
                    title={this.state.title}
                    authors={this.state.authors}
                    category={this.state.category}
                    pubDate={this.state.pubDate}
                    synopsis={this.state.synopsis}
                    image={this.state.image}
                    isbn={this.state.isbn13}
                    link={this.state.link}
                >

                </SearchedBook>
            </>

        )
    }
}

export default BookSearch;