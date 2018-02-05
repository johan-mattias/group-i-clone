import React, { Component } from 'react'
import {ReactDOM, Link} from 'react-router-dom';
import '../Style/App.css';



const FrontPageButton = () =>{
  return (
    <div>
        <Link className="link" to="/register"><button className="home">REGISTER</button></Link>
        <br></br>
        <Link className="link" to="/login"><button className="home">LOGIN</button></Link>
    </div>
  )
};

export default FrontPageButton;