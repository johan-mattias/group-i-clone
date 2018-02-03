import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FrontPageButton from './FrontPageButton.js'
import frontButton from '../Style/frontButton.css'
import SendButton from './SendButton.js'
import Reviews from './Reviews.js'
import Footer from './Footer';
import SignOutButton from './SignOutButton'
import Home from './Home.js'
import '../Style/Button.css'

class Portal extends React.Component {

  render() {
    return (
        <Router>
          <div>
            <Link to="/">
                <SignOutButton> Sign Out </SignOutButton>
            </Link>

            <Route path="/" exact component={ Home }/>
            <Footer/>
            <Route path="/reviews" exact component={ Reviews }/>
              {/*<SendButton>send</SendButton>*/}
            </div>
        </Router>
    );
  };
}

export default Portal;