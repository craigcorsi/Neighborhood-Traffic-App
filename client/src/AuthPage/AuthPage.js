import React, { Component } from 'react';
import LandingPage from '../components/pages/LandingPage';
//import Main from '../components/Main/Main'
import LogIn from '../components/LogIn/LogIn'
//background-image: url(https://www.walldevil.com/wallpapers/a94/sand-desert.jpg)
import Background from "../images/sandy.jpg"

class AuthPage extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div >
        {
          isAuthenticated() 
        }
        {
          !isAuthenticated() && (
            //   <h4>
            //     You are not logged in! Please{' '}
            //     <a
            //       style={{ cursor: 'pointer' }}
            //       onClick={this.login.bind(this)}
            //     >
            //       Log In
            //     </a>
            //     {' '}to continue.
            //   </h4>
            // )&&
            <div className="container-fluid" style={
              {backgroundImage: `url(${Background})`,
              backgroundSize: `cover`,
              height: "100vh"}}>
            <LogIn/>
            </div>)
        }

        {isAuthenticated() && (
          <div style={
            {backgroundImage: `url(${Background})`,
            backgroundSize: `cover`}}>
            <LandingPage />
            </div>
        )}
      </div>
    );
  }
}

export default AuthPage;