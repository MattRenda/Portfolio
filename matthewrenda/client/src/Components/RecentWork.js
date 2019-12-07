import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


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
                            <a href='https://atepex.herokuapp.com/' target='_blank' rel="noopener noreferrer"> <img style={{ margin: '0px auto' }} src={require('../imgs/AC_heating_logo.png')}
                                className='work-logos'
                                alt="ACHeatinglogo"
                            /></a>
                        </Col>
                        <Col className='background-image-ib' md={4}>
                            <a href='https://interviewbuddyapp.herokuapp.com' target='_blank' rel="noopener noreferrer"><img src={require('../imgs/Interviewbuddy_logo.png')}
                                className='work-logos'
                                alt="interviewBuddylogo"

                            /></a>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default RecentWork