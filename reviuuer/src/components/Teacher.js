import React from 'react'
import Cookies from "universal-cookie";

import Footer from './Footer';
import '../Style/Portal.css';

class Teacher extends React.Component{

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
              this.props.history.push('/')
            }
          })
        })
    document.body.classList.remove('home');
    document.body.classList.add('portal'); //adding the correct background by setting the class of the body
  }

  render() {
    return(
      <div className="portal">
        <div className = 'header'>
          <h1>Teachers</h1>
          <div className = "signOutContainer">
            <button className="signOut" onClick={this.handleSingOut}>SIGN OUT</button>
          </div>
        </div>
        <div className="blueStripe"/>
        <div className = 'teacherPage'>
          <div className = 'columnHeader'>
            <h3>Teacher </h3>
            <h3>Rating </h3>
            <h3>Comments </h3>
          </div>
          <ul className = 'portalList'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Footer/> 
      </div>

    )
  }
}

export default Teacher