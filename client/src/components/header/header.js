import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Header extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    componentDidMount() {

    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>(React) Google Books Search</h1>
                            <p>
                            Searched for and Save Books of Interest
  </p>
                     
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Header;