import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import FrontPageButton from './FrontPageButton.js'
import SendButton from './SendButton.js'
import Reviews from './Reviews.js'
import Footer from './Footer';
import SignOutButton from './SignOutButton'
import Home from './Home.js'
import '../Style/Button.css'
import 'typeface-roboto';

class Portal extends React.Component {

  componentWillMount() {
    document.body.classList.add('portal');
  }

  render() {
    return (
        <Router>
          <div className="portal">
            <div className = "signOut">
            <Link to="/">
                <SignOutButton> Sign Out </SignOutButton>
            </Link>
            </div>
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