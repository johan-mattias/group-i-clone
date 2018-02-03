import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Style/App.css';
import login from './LoginPage.js'
import Register from './RegisterPage';
import reviews from './Reviews.js'
import addReview from './AddReviewPage'


class Home extends React.Component {

  render() {
    return (
        <Router>
          
          <div className="flex-container blueBackground">
          <button className="home"><Link className="link" to="/register">Sign up</Link></button>
          <button className="home"><Link className="link" to="/login">Sign in</Link></button>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/register">REGISTER</Link></li>
              <li><Link to="/reviews">REVIEWS</Link></li>
              <li><Link to="/addreview">ADD REVIEWS</Link></li>
            </ul>
            <h1>ReviUUer</h1>
            <Route path="/login" exact component={ login }/>
            <Route path="/register" exact component={ Register }/>
            <Route path="/reviews" exact component={ reviews }/>
            <Route path="/addreview" exact component={ addReview }/>
          </div>
        </Router>
    );
  };
}

export default Home;