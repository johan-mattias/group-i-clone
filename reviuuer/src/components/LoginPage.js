import React from 'react';
import {ReactDOM, BrowserRouter as Router, Route, Link, push} from 'react-router-dom';
import Cookies from "universal-cookie";
import 'typeface-roboto';
import sendButton from './SendButton.js'
import '../Style/Button.css';
import '../Style/App.css';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '',
                  password: '',
                  name: '',
                  cookies: '',
                };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  componentWillMount() {
    const { cookies } = this.props;
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
                const cookies = new Cookies();

                const date = new Date();
                const days = 30
                date.setDate(date.getDate() + parseInt(days));
                cookies.set('myCat', 'Pacman', {path: '/', expires: date} );
                console.log("Push , correct password");

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
        <div className="flex-container">
          <form className="login-column" onSubmit={this.handleSubmit}>
            <input className="login" placeholder="Email" value={this.state.email} onChange={this.EmailClick.bind(this)} /> {/*TODO addtype="email"*/}
            <input className="login" type="password" placeholder="Password" value={this.state.password} onChange={this.PwdClick.bind(this)} />
            <input className="submit" type="submit" value="LOGIN" />
          </form>
        </div>
    </div>
    );
  };
}


export default Login;