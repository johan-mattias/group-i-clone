import React, { Component } from 'react'
import '../Style/Button.css'

class Footer extends Component{

    
    render(){

        return(
            <div> 
            <button className="nav">Home</button>
            <button className="nav" >Course</button>
            <button className="nav" >Teacher</button>    
            </div>
        )

    }
}

export default Footer;