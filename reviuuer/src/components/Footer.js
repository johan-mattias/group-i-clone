import React, { Component } from 'react'
import NavbarButton from './NavbarButton'
import '../Style/Button.css'

class Footer extends Component{
    

    state = { 
        lightBlue : [false, true, true]
    }

    changeColor(number){
        if(number === 0){
            this.setState({lightBlue : [false, true, true]})
        }
        if(number === 1){
            this.setState({lightBlue : [true, false, true]})
        }
        if(number === 2){
            this.setState({lightBlue : [true, true, false]})
        }        

    }
    
    render(){
        let bgColorHome = {
            backgroundColor: this.state.lightBlue[0] ? '#2F80ED' : '#3B5E8F'
        }
        let bgColorCourse = {
            backgroundColor: this.state.lightBlue[1] ? '#2F80ED' : '#3B5E8F'
        }
        let bgColorTeacher = {
            backgroundColor: this.state.lightBlue[2] ? '#2F80ED' : '#3B5E8F'
        }
        
        return(
            <div> 
            <button className="nav" changeStyle={bgColorHome} onClick={this.changeColor(0)}>Home</button>
            <button className="nav" changeStyle={bgColorCourse} onClick={this.changeColor(1)}>Course</button>
            <button className="nav" changeStyle={bgColorTeacher} onClick={this.changeColor(2)}>Teacher</button>
                
            </div>
        )

    }
}

export default Footer;