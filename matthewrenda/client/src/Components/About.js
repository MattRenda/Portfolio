import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'


class About extends Component {

    render() {
        return (
            <>

                <div className='about-width center '>
                    <span className='about-intro font'><b>A little bit about me.</b></span>
                    <Row>
                        <Col className='about-card font'>
                            <b>Education</b><br /><br />
                            I am currently attending California State University, Sacramento.
                            My expected graduation date is May 2020 with a Bachelors in Computer Science.
                                </Col>
                        <Col className='about-card font'>
                            <b>Passion</b><br /><br />
                            I have always loved creating things. Seeing something through from start to
                            finish has always given me a sense of fullfillment. Because of this, I naturally
                            gravitated to web development. As it is a wonderful way to create, and add value
                            to many peoples lives.
                                                            </Col>
                        <Col className='about-card font'>
                            <b>Drive</b><br /><br />
                            I have grown quite a thirst for knowledge, and knowing that my work can always
                            improve makes me strive to be better every day.
                                </Col>
                    </Row>
                </div>



            </>
        )
    }
}

export default About