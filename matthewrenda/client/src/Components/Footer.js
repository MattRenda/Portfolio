import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <>
                <footer>
                    <div className='footer-bgColor center blue'>
                        <img className='footer-center' src={require('../imgs/portfolio_logo_yellow.png')}
                            width='50px'
                            height='50px' 
                            alt="Matthew Renda logo"/>
                        <div className='footer-txtCenter'> Copyright &copy; 2020, MatthewJRenda</div>


                    </div>

                </footer>

            </>
        )
    }
}

export default Footer;