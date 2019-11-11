import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

const bgColor = {
    backgroundColor: 'rgb(252,183,78)',
    height: '50vh'
}

const center = {
    marginLeft: '48vw',
    marginTop: '15vh'
}

const txtCenter = {
    textAlign: 'center',
    marginTop:'20vh'
}

class Footer extends Component {

    render() {
        return (
            <>
                <footer>
                    <div style={bgColor}>
                        <img style={center} src={require('../portfolio_logo_White.png')}
                            width='50px'
                            height='50px' />
                        <div style={txtCenter}> Copyright &copy; 2020, MatthewJRenda</div>


                    </div>

                </footer>

            </>
        )
    }
}

export default Footer;