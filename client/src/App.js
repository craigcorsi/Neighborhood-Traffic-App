import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Main from './components/pages/Main';
import LandingPage from './components/pages/LandingPage';
import Community from './components/pages/Community';
import About from './components/pages/About';
import AuthApp from "./AuthApp/AuthApp"
//import AuthPage from "./AuthPage/AuthPage"
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
// import Footer from './components/Footer';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// const App = () => (
  class App extends Component {
    constructor (props){
      super(props)

      this.state={
        isLoggedIn:false
      }
    }

    render(){
      console.log(auth.isAuthenticated());
      return(
        <Router history={history} component={AuthApp}>
    <div>
      <Header />
      <h1 className="App-title">Welcome to the neighborhood, neighborino!</h1>
      <h1 className="App-title">DEMO</h1>

  {/* The ternary statement in these routes prevents users from accessing pages on the nav bar without logging in first */}      

      <Route exact path="/community" render={(props) => (
        auth.isAuthenticated() ? <Community {...props} /> : <AuthApp auth={auth} {...props} />
      )}/>

      <Route exact path="/about" render={(props) => (
        auth.isAuthenticated() ? <About {...props} /> : <AuthApp auth={auth} {...props} />
      )}/>
      
      <Route exact path="/main/:mapId" render={(props) => (
        auth.isAuthenticated() ? <Main {...props} /> : <AuthApp auth={auth} {...props} />
      )}/>

  {/* These routes are not available in the nav bar */}    
    
      <Route exact path="/landing" render={(props) => <LandingPage {...props} />} />

      <Route exact path="/" render={(props) => <AuthApp auth={auth} {...props} />} />

      <Route exact path="/callback" render={(props) => <Callback {...props} />} />

    </div>
  </Router>
      )
    }

  } 

export default App;

