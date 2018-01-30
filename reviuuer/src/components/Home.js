import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Style/App.css';
import login from './LoginPage.js'
import splash from './Splash.js'


const Home = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
      <Route path="/"  exact component={ splash }/>
      <Route path="/login" exact component={ login }/>
    </div>
  </Router>
)

export default Home;
