import React, { Component } from 'react'
import {ReactDOM, Link} from 'react-router-dom';
import '../Style/App.css';



const FrontPageButton = () =>{
  return (
    <div>
        <button className="home"><Link className="link" to="/register">REGISTER</Link></button>
        <br></br>
        <button className="home"><Link className="link" to="/login">LOGIN</Link></button>
    </div>
  )
};

export default FrontPageButton;