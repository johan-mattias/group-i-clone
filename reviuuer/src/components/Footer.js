import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class footer extends Component {

  render() {
    const {
      authSignIn,
    } = this.props;

    return (
      <div className="footer-portal">
        <div className="logo-wrap">
        </div>
          <ul>
             <li><Link to='/'>Home</Link></li>
             <li><Link to='/Course'>Course</Link></li>
             <li><Link to='/Teacher'>Teacher</Link></li>
          </ul>
      </div>
    );
  }
}

export default footer;