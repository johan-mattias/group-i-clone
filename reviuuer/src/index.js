import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Portal from './components/Portal';

import './Style/index.css';

const provider = (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/portal" component={ Portal }></Route> {/*TODO LÄGG TILL SÅ MAN BLIR REDIRECT OM MAN HAR VALID KEY*/}
                    <Route component={ Home } />
                </Switch>
            </div>
        </Router>

);

ReactDOM.render(provider, document.getElementById('root'));