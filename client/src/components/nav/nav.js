import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'


class Navigation extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }


    componentDidMount() {

    }

    render() {

        return (
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default Navigation;