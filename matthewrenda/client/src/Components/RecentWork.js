import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'


class RecentWork extends Component {

    render() {
        return (
            <div className='work-moveUp'>
                <Container justify-content-center>
                        <div >
                            <div className='work-introbig'>
                                <b>My recent work</b>
                            </div>

                            <div className='work-center'>
                                Here are a few of my recent projects
                            </div>
                        </div>

                    <Row className='work-smSpace'>
                        <Col>
                            <a href='https://atepex.herokuapp.com/' target='_blank'> <img src={require('../imgs/AC_heating_logo.png')}
                                width='250'
                                height='250'
                                className='work-hover'
                                href=''/></a>
                        </Col>
                        <Col>
                            <a href='https://interviewbuddyapp.herokuapp.com' target='_blank'><img src={require('../imgs/Interviewbuddy_logo.png')}
                            width='250'
                            height='250'
                            /></a>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RecentWork