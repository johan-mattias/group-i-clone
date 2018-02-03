import React, { Component } from 'react'
import '../Style/Button.css'
import '../Style/Portal.css'

class Footer extends Component{

    
    render(){

        return(
            <div className = "footer"> 
            <button className="nav">Home</button>
            <button className="nav" >Course</button>
            <button className="nav" >Teacher</button>    
            </div>
        )

    }
}

export default Footer;