import React, { Component } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
// import Nav from '../../components/nav/nav';
import SavedBooksSection from '../../components/savedbooks/savedbooks';
import Navigation from '../../components/nav/nav';


class SavedBooksPage extends Component {
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

                <SavedBooksSection>

                </SavedBooksSection>

                <Footer>

                </Footer>
            </>
        )
    }

};


export default SavedBooksPage;