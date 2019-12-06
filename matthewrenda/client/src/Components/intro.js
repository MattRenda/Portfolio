import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

class Intro extends Component {

    render() {

        return (
            <>
                <div className='center padding'>
                        <h4><b>Hi i'm Matthew. Nice to meet you.</b></h4>  <br />
                        <p className="intro-p"> 
                         Since beginning my journey as a freelance designer nearly 8 years ago, I've done remote work 
                         for agencies, consulted for startups, and collaborated with talented people to create 
                         digital products for both business and consumer use. I'm quietly confident, naturally curious, 
                         and perpetually working on improving my chops one design problem at a time.
                        </p>
                </div>
            </>
        )
    }
}

export default Intro;