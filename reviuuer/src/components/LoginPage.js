import React from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link, push} from 'react-router-dom';
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

  handleSubmit(event) {
    event.preventDefault();
    var email = this.state.email
    var pwd = this.state.password
    var fetchURL = `/api/auth?email=${email}&password=${pwd}`;
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
            const access = json.access
            if (access === true) {
              console.log("Push , correct password")

              // this.props.push('/portal');
             }
            else {
              console.log("Wrong username or password")
            }
            console.log(access)
            // this.setState({access})
          })
        })
  }

  render() {
    return (
      
      <div>
          <form onSubmit={this.handleSubmit}>
          <input className="login" placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} /> {/*TODO addtype="email"*/}
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