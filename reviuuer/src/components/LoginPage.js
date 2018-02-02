import React from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import sendButton from './SendButton.js'

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
    alert('A email was submitted: ' + this.state.email);
    alert('A password was submitted: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input style={{
        marginBottom: '15px',
        backgroundColor: 'white',
        fontFamily: 'Roboto',
        color: '#828282',
        height: '68px',
        width: '338px',
        borderRadius: '20px',
        borderStyle: 'solid',
        fontSize: '35px',
        textAlign: 'center'
      }}  
          placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} />
          <br></br>
          <input  style={{
        marginBottom: '15px',
        backgroundColor: 'white',
        fontFamily: 'Roboto',
        color: '#828282',
        height: '68px',
        width: '338px',
        borderRadius: '20px',
        borderStyle: 'solid',
        fontSize: '35px',
        textAlign: 'center'
      }}
         placeholder="Password" value={this.state.password} onChange={this.PwdClick.bind(this)} />
          <br></br>
          <input style={{
            marginBottom: '15px',
            backgroundColor: '#2F80ED',
            fontFamily: 'Roboto',
            color: 'white',
            height: '75px',
            width: '267px',
            borderRadius: '45px',
            borderStyle: 'solid',
            borderColor:'white',
            fontSize: '25px',
            fill: 'solid'
          }} type="submit" value="LOGIN" />
        </form>
      </div>
    );
  };
}


export default Login;