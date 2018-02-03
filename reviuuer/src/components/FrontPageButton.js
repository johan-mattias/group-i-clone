import React, { Component } from 'react'
import {ReactDOM, Link} from 'react-router-dom';
import '../Style/App.css';



const FrontPageButton = () =>{
  return (
    <div>
        <button className="home"><Link className="link" to="/register">Sign up</Link></button>
        <button className="home"><Link className="link" to="/login">Sign in</Link></button>
    </div>
  )
};

export default FrontPageButton;