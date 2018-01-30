import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Logout from './Logout';

//import '../styles/header.css';

class header extends Component {

  render() {
    return (
      <div className="header-portal">
        <div className="logo-wrap">
          <div id="logo"></div>
        </div>
          <ul>
            <li><Link to='/logout'>Log out</Link></li>
          </ul>
      </div>
    );
  }
}

export default header;