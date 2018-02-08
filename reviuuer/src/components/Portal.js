import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom";
import Reviews from './Reviews.js'
import Footer from './Footer';
import SignOutButton from './SignOutButton'
import Home from './Home.js'
import '../Style/Button.css'
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
    console.log(this.props)
    return (
        <Router>
          <div className="portal">
            <div className = 'header'>
            <h1>Home</h1> 
            <div className = "signOut">
            <Link to="/">
                <SignOutButton> Sign Out </SignOutButton>
            </Link>
            </div>
            </div>
            <div className="blueStripe">
            </div>
            <Route path="/" exact component={ Home }/>
            <Route path="/portal/teacher" component={ ()=> {
             return <p>Hello</p>
            } }/>
            {/* <Route path="/Course" component={ Course }/> */}
            <Footer/>
            <Route path="/reviews" exact component={ Reviews }/>
            </div>
        </Router>
    );
  };
}

export default withRouter(Portal);