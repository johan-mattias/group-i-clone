import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import '../styles/header.css';

class header extends Component {

  render() {
    const {
      authSignIn,
    } = this.props;

    return (
      <div className="header-splash">
        <div className="logo-wrap">
          <div id="logo"></div>
        </div>
          <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/Course'>Course</Link></li>
             <li><Link to='/Teacher'>Teacher</Link></li>
             <li><Link to="/Signin">
                <button id="mobile-btn-sign" type="button"> Sign in </button>
              </Link></li>
          </ul>
      </div>
    );
  }
}

export default header;