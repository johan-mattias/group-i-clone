import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom";

import Reviews from './Reviews.js';
import Footer from './Footer';
import Home from './Home.js';
import Course from './Course.js';
import Teacher from './Teacher.js'

import '../Style/Button.css';
import '../Style/Portal.css';
import 'typeface-roboto';

class PortalHome extends React.Component {
  constructor(props) {
    super(props);

     this.handleSingOut = this.handleSingOut.bind(this);
  }

  handleSingOut(e) {
    e.preventDefault();
    //TODO add so we remove the cookie
    this.props.history.push('/');
    console.log("TRY TO SIGN OUT")
  }

  componentWillMount() {
    const c = new Cookies();
    var cookieFromUser = c.get('user')
    var fetchURL = `/api/auth?cookie=${cookieFromUser}`;
    fetch( fetchURL )
    .then(
        (res) => { 
        if(res.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            res.status);
          return;
        }
      res.json()
          .then((json) => { 
            const access = json.accessCookie
            console.log(access)
            if (access === true) {
               console.log("correct cookie ")
             }
            else {
              console.log("Wrong cookie ")
              this.props.history.push('/')
            }
          })
        })
    document.body.classList.remove('home');
    document.body.classList.add('portal'); //adding the correct background by setting the class of the body
  }

  render() {
    return (
      <div className="portal">
        <div className = 'header'>
          <h1>Home</h1>
          <div className = "signOutContainer">
            <button className="signOut" onClick={this.handleSingOut}>SIGN OUT</button>
          </div>
        </div>
        <div className="blueStripe"/>
        <Footer/> 
      </div>
    );
  };
}

export default withRouter(PortalHome);