import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'


class About extends Component {

    render() {
        return (
            <>

                <div className='about-width center '>
                    <span className='about-intro'><b>A little bit about me.</b></span>
                        <Row>
                            <Col className='about-card'>
                                <b>Education</b><br/><br/>
                                I am currently attending California State University, Sacramento.
                                My expected graduation date is May 2020 with a Bachelors in Computer Science.
                                </Col>
                            <Col className='about-card'>
                                <b>Passion</b><br/><br/>
                                I have always loved creating things. Seeing something through from start to 
                                finish gives such a fullfilling feeling. This feeling brought me to web 
                                development. As it is not only a wonderful way to create, but many people 
                                can make use of your work. 
                                </Col>
                            <Col className='about-card'>
                                <b>Drive</b><br/><br/>
                                I have grown quite a thirst for knowledge and knowing that my work can always
                                improve makes me strive to be better every day.
                                </Col>
                        </Row>
                </div>



            </>
        )
    }
}

export default About