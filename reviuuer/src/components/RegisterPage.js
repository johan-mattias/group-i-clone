import React, { Component } from 'react';
import request from 'request';
import '../Style/Button.css';



class Register extends Component {
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
    fetch('/api/reg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
        })
    })

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className="login" placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} />
          <br></br>
          <input className="login" placeholder="Password" value={this.state.password} onChange={this.PwdClick.bind(this)} />
          <br></br>
          <input className="submit" type="submit" value="LOGIN" />
        </form>
      </div>
    );
  };
}


export default Register;