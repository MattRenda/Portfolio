import React, { Component } from 'react'
import { Container, Col, Row, Navbar, Button } from 'react-bootstrap'

class Intro extends Component {

    render() {

        return (
            <>
                <div className='center padding'>
                        <h4><b>Hi i'm Matthew. Nice to meet you.</b></h4>  <br />
                        <p className="intro-p"> 
                        Hard-working web developer, with a passion for problem solving in the least amount of time.
                        I have worked in many groups on multiple projects during my time at CSUS. I've collaborated with 
                        small start ups to improve their productivity and sales. I am passionate about software 
                        development and enjoy what I do.  
                        </p>
                </div>
            </>
        )
    }
}

export default Intro;