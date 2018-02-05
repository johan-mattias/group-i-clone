import React, { Component } from 'react';
import '../Style/Button.css';
import 'typeface-roboto';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: '',
                  passwordVerify:'',
                  message: '',
                  cookie: '',
                };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  EmailClick(event) {
    this.setState({email: event.target.value});
  }

  PwdClick(event) {
    this.setState({password: event.target.value});
  }

  PwdClickCheck(event) {
    this.setState({passwordVerify: event.target.value});
  }
  
  handleSubmit(event) { //TODO LÄGGA IN SÅ VI KOLLAR I DB
    event.preventDefault();
    var pwd1 = this.state.password
    var pwd2 = this.state.passwordVerify

    if (pwd1.length < 4){
      console.log("Password needs to be longer than 4")
    }

    else if (pwd1 !== pwd2){
      console.log("Passwords don't match")
    }

    else{
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
    }
  }

  render() {
    return (
      <div>
        <form className="login-column" onSubmit={this.handleSubmit}>
          <input className="login" placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} /> {/*TODO add type="email"*/}
          <input className="login" type="password" placeholder="Password" value={this.state.password} onChange={this.PwdClick.bind(this)} />
          <input className="login" type="password" placeholder="Password" value={this.state.passwordVerify} onChange={this.PwdClickCheck.bind(this)} />
          <input className="submit" type="submit" value="REGISTER" />
        </form>
      </div>
    );
  };
}


export default Register;