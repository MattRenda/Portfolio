import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'


const introbig = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "2vw",
    textAlign: 'center',
    marginTop: '120px',
    color:'rgb(75, 77, 79)'

}

const introsmall = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "1.5vw",
    textAlign: 'center',
    marginTop: '3vh',
    marginBottom: '50vh',
    color:'rgb(75, 77, 79)'

}

const btn = {
    position: 'absolute',
    top: '6vw',
    right: '6vw',
    backgroundColor:'rgb(252, 183, 78)',
    border:'none',
}

const brand={
    position: 'absolute',
    top: '6vw',
    left: '6vw'
}

const smSpace={
    marginTop: '20vh'
}

const bgColor={
    backgroundColor: 'white',
    height:'100vh'
}
class Header extends Component {

    render() {
        return (
            <div style={bgColor}>
                <Navbar >
                    <Navbar.Brand href="#home" style={brand}>
                        <img
                            src={require('../portfolio_logo_template.png')}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Navbar>

                <div>
                    <Button style={btn}>Connect</Button>
                </div>

                <Container style={smSpace}>
                    <Row>
                        <Col>
                            <div style={introbig}>
                                <b>Full stack web developer with a passion for creating, and a drive to learn.</b>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div style={introsmall}>
                                Hi, my name is Matthew Renda. I look forward to working with you.
                    </div>
                        </Col>
                    </Row>
                   

                </Container>
            </div>
        )
    }
}

export default Header;