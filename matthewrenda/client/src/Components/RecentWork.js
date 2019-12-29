import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'


class RecentWork extends Component {

    render() {
        return (
            <div className='center padding'>
                <Container justify-content-center>
                    <div >
                        <div className='work-introbig'>
                            <h4><b>My recent work</b></h4>
                        </div>

                    </div>


                    <a href='https://atepex.herokuapp.com/' target='_blank' rel="noopener noreferrer"> <img src={require('../imgs/AC_heating_logo.png')}
                        className='work-logos background-image-ac'
                        alt="ACHeatinglogo"
                    /></a>

                    <a href='https://interviewbuddyapp.herokuapp.com' target='_blank' rel="noopener noreferrer"><img src={require('../imgs/Interviewbuddy_logo.png')}
                        className='work-logos background-image-ib'
                        alt="interviewBuddylogo"
                    /></a>
                   
                </Container>

            </div>
        )
    }
}

export default RecentWork