import React, { Component } from 'react'
import { Container } from 'react-bootstrap'


const style = {
    fontFamily: 'Open Sans, sans-serif'
}

class Header extends Component {

    render() {
        return (
            <Container>
                <div style={style}>
                Hello, my name is Matthew Renda. I am a web developer.
            </div>
            </Container>
        )
    }
}

export default Header;