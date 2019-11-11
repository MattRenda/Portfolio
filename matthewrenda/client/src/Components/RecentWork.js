import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

const smSpace={
    marginTop: '50px',
    textAlign: 'center'
}
const center = {
    textAlign: 'center',
    color:'rgb(75, 77, 79)'

}

const introbig = {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: "20px",
    textAlign: 'center',
    color:'rgb(75, 77, 79)'
}

const round={
}

const moveUp={
    marginTop:'-20vh',
    marginLeft:'10vw',
    marginRight:'10vw',
    backgroundColor:'white',
    marginBottom:'30vh',
    borderRadius: '25px',

}
const hover={
      cursor: 'pointer',
      borderRadius: '150px'

}
class RecentWork extends Component {

    render() {
        return (
            <div style={moveUp}>
                <Container justify-content-center>
                        <div >
                            <div style={introbig}>
                                <b>My recent work</b>
                            </div>

                            <div style={center}>
                                Here are a few of my recent projects
                            </div>
                        </div>

                    <Row style={smSpace}>
                        <Col>
                            <a href='https://atepex.herokuapp.com/' target='_blank'> <img src={require('../AC_heating_logo.png')}
                                width='250'
                                height='250'
                                style={hover}
                                href=''/></a>
                        </Col>
                        <Col>
                            <a href='https://interviewbuddyapp.herokuapp.com' target='_blank'><img src={require('../Interviewbuddy_logo.png')}
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