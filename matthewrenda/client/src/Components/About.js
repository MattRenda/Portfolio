import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

const width = {
    textAlign: 'center',
    paddingBottom: '50vh',
    paddingTop: '10vh',
    backgroundColor: 'rgb(252,183,78)',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "1.5vw",
    color:'rgb(75, 77, 79)',
    paddingLeft:'2vw',
    paddingRight:'2vw'
}

const card={
    height:'40vw',
    backgroundColor:'white',
    borderRadius:'50px',
    margin:'1vw'
}
const intro = {
    fontSize: '2vw'
}
class About extends Component {

    render() {
        return (
            <>

                <div style={width}>
                    <span style={intro}><b>A little bit about me.</b></span>
                        <Row>
                            <Col style={card}>
                                Education<br/><br/>
                                I am currently attending California State University, Sacramento.
                                My expected graduation date is May 2020 with a Bachelors in Computer Science.
                                </Col>
                            <Col style={card}>
                                Passion<br/><br/>
                                I have always loved creating things. Seeing something through from start to 
                                finish gives such a fullfilling feeling. This feeling brought me to web 
                                development. As it is not only a wonderful way to create, but many people 
                                can make use of your work. 
                                </Col>
                            <Col style={card}>
                                Drive<br/><br/>
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