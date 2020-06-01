import React, { Component } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron'

class Footer extends Component {
    constructor (props) {
        super();
        this.state = {

        }
    }


    componentDidMount () {
        
    }

    render() {

        return (
            
            <Jumbotron>
                © 2020 Eric S Bossler
            </Jumbotron>
                    
     
        )
    }
}

export default Footer;