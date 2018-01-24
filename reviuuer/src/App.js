import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, {CustomApp}</h1>;
      </div>
    );
  }
}

CustomApp.defaultProps = {
  color: 'blue'
};

export default App;
