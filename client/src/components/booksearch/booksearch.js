import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import SearchedBook from './searchedbook/searchedbook'
import Results from './results/results';

class BookSearch extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    handleSubmit(e){
        e.preventDeafault();

        
    }

    componentDidMount() {

    }

    render() {

        return (
            <>
                <Jumbotron>
                    <Container>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Search for a Book</Form.Label>
                                <Form.Control type="text" placeholder="ex: Fahrenheit 451" />
                                <Form.Text className="text-muted">
                                    Pick a good one!
                    </Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>
                    </Container>
                </Jumbotron>

                <Results>

                </Results>
            </>

        )
    }
}

export default BookSearch;