import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom";
import Reviews from './Reviews.js';
import Footer from './Footer';
import SignOutButton from './SignOutButton';
import Home from './Home.js';
import Course from './Course.js';
import Teacher from './Teacher.js'
import '../Style/Button.css';
import '../Style/App.css';
import '../Style/Portal.css';
import 'typeface-roboto';

class Portal extends React.Component {
  constructor(props) {
  super(props);
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
              // this.props.push('/'); // Push user back to splash here
            }
          })
        })

    document.body.classList.add('portal'); //adding the correct background by setting the class of the body
  }

  render() {
    return (
      <div className="portalContainer">
        <div>
          <div className = "header">
            <h1>Home</h1> 
            <div className = "signOut">
              <Link className="link" to="/">
                  <SignOutButton>Sign Out</SignOutButton>
              </Link>
            </div>
          </div>
          <div className="blueStripe" />
          
          <Router>
            <div>
              <Route path="/" exact component={ Home }/>
              <Route path="/Portal/Course" component={ Course }/>
              <Route path="/Portal/Teacher" component={Teacher}/> 
              <Footer/>
              <Route path="/reviews" exact component={ Reviews }/>
            </div>
          </Router>
        </div>
      </div>
    );
  };
}

export default withRouter(Portal);