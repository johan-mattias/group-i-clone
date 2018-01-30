import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Course</Link></li>
        <li><Link to='/schedule'>Teacher</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
