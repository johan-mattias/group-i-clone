import React, { Component } from 'react'
import {ReactDOM, Link} from 'react-router-dom';
import Button from './Portal';
import {withRouter} from "react-router-dom";
import '../Style/App.css';
import 'typeface-roboto';
import FrontPageButton from './FrontPageButton';



class Splash extends React.Component {
    constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.body.classList.add('home');
  }

    render() {
    return (
        <div>
          <div><h1><Link className="link logo" to="/">ReviUUer</Link></h1></div>
          <hr></hr>
          <div>
            < FrontPageButton /> 
          </div>
        </div>

    )
  }
}

export default withRouter(Splash);