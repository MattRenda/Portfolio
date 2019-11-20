import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Footer extends Component {

    render() {
        return (
            <>
                <footer>
                    <div className='footer-bgColor'>
                        <img className='footer-center' src={require('../imgs/portfolio_logo_White.png')}
                            width='50vw'
                            height='50vw' />
                        <div className='footer-txtCenter'> Copyright &copy; 2020, MatthewJRenda</div>


                    </div>

                </footer>

            </>
        )
    }
}

export default Footer;