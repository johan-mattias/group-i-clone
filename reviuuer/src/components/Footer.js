import React, { Component } from 'react'
import NavbarButton from './NavbarButton'

class Footer extends Component{
    
    state = {
        lightBlue : true 
    }

    changeColor(){
        this.setState({lightBlue: !this.state.lightBlue})
        console.log('CLIKED!')
        

    }
    
    render(){
        let bgColor = {
            backgroundColor: this.state.lightBlue ? '#2F80ED' : '#3B5E8F'
        }
        console.log(bgColor)
        return(
            <div> 
            <NavbarButton changeStyle={bgColor} onClick={() => {this.changeColor()}}>Home</NavbarButton>
            <NavbarButton>Course</NavbarButton>
            <NavbarButton>Teacher</NavbarButton>
                
            </div>
        )

    }
}

export default Footer;