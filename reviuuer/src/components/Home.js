import React, { Component } from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Style/App.css';
import login from './LoginPage.js'
import splash from './Splash.js'
import reviews from './Reviews.js'
import NavbarButton from './NavbarButton';
import Footer from './Footer';

class Home extends React.Component {
    
    state = {
    response: ''
  };
  
    componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    }

    callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);
    return body;
    };

  render() {
    return (
        <Router>
          <div>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/reviews">REVIEWS</Link></li>
            </ul>
            <Footer/>
            <Route path="/"  exact component={ splash }/>
            <Route path="/login" exact component={ login }/>
            <Route path="/reviews" exact component={ reviews }/>
          </div>
        </Router>
    );
  };
}

export default Home;