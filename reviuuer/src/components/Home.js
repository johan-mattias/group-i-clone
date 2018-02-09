import React, { Component } from 'react';
import 'typeface-roboto';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import Cookies from "universal-cookie";
import '../Style/App.css';
import login from './LoginPage.js';
import Register from './RegisterPage';
import reviews from './Reviews.js';
import addReview from './AddReviewPage';
import splash from './FrontPageButton';
import Portal from './Portal';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

    document.body.classList.add('home');
  }

  render() {
    return (
        <Router>
            <div className="flex-container home">
              <div className="row"> 
                <Route path="/" exact component={ splash }/>
                <Route path="/login" exact component={ login }/>
                <Route path="/register" exact component={ Register }/>
                <Route path="/portal" exact component={ Portal }/>
                <Route path="/reviews" exact component={ reviews }/>
                <Route path="/addreview" exact component={ addReview }/>
              </div>
            </div>
        </Router>
    );
  };
}

export default withRouter(Home);