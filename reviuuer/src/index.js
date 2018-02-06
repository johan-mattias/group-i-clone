import React from 'react';
import ReactDOM from 'react-dom';
import Cookies from "universal-cookie";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './Style/App.css';
import 'typeface-roboto';

import Home from './components/Home';
import Portal from './components/Portal';

import './Style/index.css';


class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = {path: '',
                  component: undefined,
                };
    }

render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={ Home }/>
                    <Route exact path="/portal" component={ Portal }/>
                </Switch>
            </div>
        </Router>
    )
  }
}


ReactDOM.render(
 <App />,
 document.getElementById('root')
);