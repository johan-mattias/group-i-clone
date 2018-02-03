import React from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import sendButton from './SendButton.js'
import '../Style/Button.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  EmailClick(event) {
    this.setState({email: event.target.value});
  }

  PwdClick(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) { //TODO LÄGGA IN SÅ VI KOLLAR I DB 
    fetch('/api/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: this.state.email,
            password: this.state.password
        })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="login" type="email" placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} />
          <br></br>
          <input className="login" type="password" placeholder="Password" value={this.state.password} onChange={this.PwdClick.bind(this)} />
          <br></br>
          <input className="submit" type="submit" value="LOGIN" />
        </form>
      </div>
    );
  };
}


export default Login;