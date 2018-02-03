import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Style/App.css';
import login from './LoginPage.js';
import Register from './RegisterPage';
import reviews from './Reviews.js';
import addReview from './AddReviewPage';
import splash from './FrontPageButton';


class Home extends React.Component {

  componentWillMount() {
    document.body.classList.add('home');
  }

  render() {
    return (
        <Router>
          <div className="flex-container home">
            <h1><Link className="link logo" to="/">ReviUUer</Link></h1>
              {/*<ul>
                <li><Link to="/reviews">REVIEWS</Link></li>
                <li><Link to="/addreview">ADD REVIEWS</Link></li>
              </ul>*/}
              <Route path="/" exact component={ splash }/>
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