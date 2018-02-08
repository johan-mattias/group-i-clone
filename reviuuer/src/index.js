import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './Style/App.css';
import 'typeface-roboto';

import Home from './components/Home';
import Splash from './components/Splash';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';

import './Style/index.css';


class App extends React.Component {
    constructor(props) {
    super(props);
    }

    render() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={ Splash }/>
                <Route exact path="/login" exact component={ Login }/>
                <Route exact path="/register" exact component={ Register }/>
                <Route exact path='/Portal' component={ Home }/>
            </div>
        </Router>
    )
  }
}


ReactDOM.render(
 <App />,
 document.getElementById('root')
);