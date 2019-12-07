import React, { Component } from 'react'
import { IoIosBook,IoMdWalk,IoMdRibbon } from "react-icons/io";


class About extends Component {

    render() {
        return (
            <>

                <div className='center padding'>
                    <div className='about-width'>
                        <div className='about-card about-p'>
                            <h4><b>Education</b><IoIosBook/></h4>
                            I am currently attending California State University, Sacramento.
                            My expected graduation date is May 2020 with a Bachelors in Computer Science.
                                </div>
                        <div className='about-card about-p'>
                            <h4><b>Passion</b><IoMdRibbon/></h4>
                            Seeing something through from start to finish has always given me a sense of 
                            fullfillment. Web development is a wonderful way to create, and add value
                            to many peoples lives.
                                                            </div>
                        <div className='about-card about-p'>
                            <h4><b>Drive</b><IoMdWalk/></h4>
                            I have grown quite a thirst for knowledge, and knowing that my work can always
                            improve makes me strive to be better every day.
                                </div>
                    </div>
                </div>



            </>
        )
    }
}

export default About;