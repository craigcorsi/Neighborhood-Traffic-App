import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
// import './App.css';

class AuthApp extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
            {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                    style={{display:"block", margin:"auto"}}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
 //                    onClick={this.goTo.bind(this, 'home')}
                    style={{display:"block", margin:"auto"}}
                  >
                    Log Out
                  </Button>
                )
            }
      </div>
    );
  }
}

export default AuthApp;