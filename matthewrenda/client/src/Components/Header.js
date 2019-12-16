import React, { Component } from 'react'
import { Container, Col, Row, Navbar } from 'react-bootstrap'
import ContactPage from './ContactPage'
class Header extends Component {

    render() {
        return (
            <div className='header-bgColor light-blue'>
                
                    <Navbar.Brand href="#home" className='header-brand'>
                        <img
                            src={require('../imgs/portfolio_logo_yellow.png')}
                            width="75"
                            height="75"
                            alt="Matthew Renda logo"
                        />
                    </Navbar.Brand>
                

                <div>
                    <ContactPage/>
                </div>

                <Container className='header-smSpace'>
                    <Row>
                        <Col>
                            <div className='header-introbig center'>
                                <b>Full stack web developer with a passion for creating, and a drive to learn.</b>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='header-introsmall center'>
                                Hi, my name is Matthew Renda. I look forward to working with you.
                    </div>
                        </Col>
                    </Row>

                </Container>
                <div className='header-logo-container'>
                    <img alt="header-design" className='header-logo-size' src={require('../imgs/MatthewRenda-logo.png')}/>
                </div>

            </div>
        )
    }
}

export default Header;