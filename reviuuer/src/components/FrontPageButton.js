import React, { Component } from 'react'
import {ReactDOM, Link} from 'react-router-dom';
import '../Style/App.css';
import 'typeface-roboto';


const FrontPageButton = () =>{
  document.body.className = "home";

  return (
    <div>
      <div><h1><Link className="link logo" to="/">ReviUUer</Link></h1></div>
      <hr/>
      <div className="login-column">
          <Link className="link" to="/register"><button className="home">REGISTER</button></Link>
          <br></br>
          <Link className="link" to="/login"><button className="home">LOGIN</button></Link>
      </div>
    </div>
  )
};

export default FrontPageButton;