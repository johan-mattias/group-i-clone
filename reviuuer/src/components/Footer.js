import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Button.css'
import '../Style/Portal.css'

class Footer extends Component{    
  render() {
    return(
      <div className = "footer"> 
        <NavLink to="/portal" exact activeClassName="selected" className = "navLink">
          <button className="nav">Home</button>
        </NavLink>
        <NavLink to="/portal/Course" exact activeClassName="selected" className = "navLink" >
          <button className="nav" >Courses</button>
        </NavLink>
        <NavLink to="/portal/Teacher" exact activeClassName="selected" className = "navLink" >
          <button className="nav">Teachers</button>    
        </NavLink>
      </div>
    );
  };
}

export default Footer;