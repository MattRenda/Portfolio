import React,{Component} from 'react'
import {Container} from 'react-bootstrap'
import Header from './Header'
import RecentWork from './RecentWork'
import Footer from './Footer'
import About from './About'
import '../index.css'

class App extends Component{

   
    render(){
       
        return(
            <>
            <Header/>
            <About/>
            <RecentWork/>
            <Footer/>
            </>
        )
    }
}

export default App;