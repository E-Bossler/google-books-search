import React, { Component } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
// import Nav from '../../components/nav/nav';
import BookSearch from '../../components/booksearch/booksearch';
import Navigation from '../../components/nav/nav';

class SearchBooksPage extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount () {
        
    }

    render() {
        return (
            <>
                <Navigation>

                </Navigation>
                
                <Header>

                </Header>

                <BookSearch>

                </BookSearch>

                <Footer>

                </Footer>
            </>
        )
    }

};

export default SearchBooksPage;
