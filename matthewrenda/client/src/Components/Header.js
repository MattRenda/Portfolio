import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

class Header extends Component {

    render() {
        return (
            <div className='header-bgColor'>
                <Navbar >
                    <Navbar.Brand href="#home" className='header-brand'>
                        <img
                            src={require('../imgs/portfolio_logo_template.png')}
                            width="50"
                            height="50"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Navbar>

                <div>
                    <Button className='header-btn'>Connect</Button>
                </div>

                <Container className='header-smSpace'>
                    <Row>
                        <Col>
                            <div className='header-introbig font'>
                                <b>Full stack web developer with a passion for creating, and a drive to learn.</b>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='header-introsmall'>
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