import React from 'react'

import Footer from './Footer';
import '../Style/Portal.css';

class Teacher extends React.Component{
  render() {
    return(
      <div className="portal">
        <div className = 'header'>
          <h1>Teachers</h1>
          <div className = "signOutContainer">
            <button className="signOut" onClick={this.handleSingOut}>SIGN OUT</button>
          </div>
        </div>
        <div className="blueStripe"/>
        <div className = 'teacherPage'>
          <div className = 'columnHeader'>
            <h3>Teacher </h3>
            <h3>Rating </h3>
            <h3>Comments </h3>
          </div>
          <ul className = 'portalList'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Footer/> 
      </div>

    )
  }
}

export default Teacher