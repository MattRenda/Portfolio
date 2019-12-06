import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'


class RecentWork extends Component {

    render() {
        return (
            <div className='center padding'>
                <Container justify-content-center>
                        <div >
                            <div className='work-introbig'>
                                <p >
                                <h4><b>My recent work</b></h4>
                                Here are a few of my recent projects
                                </p>
                            </div>

                        </div>

                    <Row >
                        <Col className='background-image-ac' md={4}>
                            <a href='https://atepex.herokuapp.com/' target='_blank'> <img style={{margin: '0px auto'}} src={require('../imgs/AC_heating_logo.png')}
                                width='250'
                                height='250'
                                className='work-hover'
                                /></a>
                        </Col>
                        <Col className='background-image-ib' md={4}>
                            <a href='https://interviewbuddyapp.herokuapp.com' target='_blank'><img src={require('../imgs/Interviewbuddy_logo.png')}
                            width='250px'
                            height='250px'
                            /></a>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RecentWork