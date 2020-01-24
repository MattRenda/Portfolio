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


                    <a

                        href='https://atepex.herokuapp.com/'
                        target='_blank'
                        rel="noopener noreferrer">
                        <div className='work-logos background-image-ac'>
                            <img style={{ width: '200px', height: '200px' }} src={require('../imgs/AC_heating_logo.png')}
                                alt="ACHeatinglogo"
                            />
                        </div>
                    </a>

                    <a
                        href='https://interviewbuddyapp.herokuapp.com'
                        target='_blank'
                        rel="noopener noreferrer">
                        <div className='work-logos background-image-ib'>
                            <img style={{ width: '200px', height: '200px' }} src={require('../imgs/Interviewbuddy_logo.png')}
                                alt="interviewBuddylogo"
                            />
                        </div>
                    </a>

                    <a 
                        href='https://remindme2.azurewebsites.net/'
                        target='_blank'
                        rel="noopener noreferrer"
                        ><img className='background-image-ib'/>
                        
                    </a>
                
                </Container>

            </div>
        )
    }
}

export default RecentWork