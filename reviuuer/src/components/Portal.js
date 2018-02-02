import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FrontPageButton from './FrontPageButton.js'
import frontButton from '../Style/frontButton.css'
import SendButton from './SendButton.js'
import Reviews from './Reviews.js'
import NavbarButton from './NavbarButton';
import Footer from './Footer';
import SignOutButton from './SignOutButton'

class Portal extends React.Component {

  render() {
    return (
        <Router>
          <div>
            <Link to="/login">
                <SignOutButton> Sign Out </SignOutButton>
            </Link>

            <Footer/>
            <Route path="/reviews" exact component={ Reviews }/>
              {/*<SendButton>send</SendButton>*/}
            </div>
        </Router>
    );
  };
}

export default Portal;