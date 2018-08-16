import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/pages/Main';
import LandingPage from './components/pages/LandingPage';
import Community from './components/pages/Community';
import About from './components/pages/About';

// import Archive from './components/Archive';
import Footer from './components/Footer';

import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
import API from "./utils/API";


class App extends Component {
  state = {
    currentAppletData: "test"
  }

  render() {

    return (
      <Router>
        <div>
          <h1 className="App-title">Welcome to the Neighborhood, {this.props.name}.</h1>
          <h1 className="App-title">DEMO</h1> 
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/main/:mapId" component={Main} />
            <Route path="/community" component={Community} />
            <Route path="/about" component={About} />
            <Route component={LandingPage} />
          </Switch>
          <Footer />
        </div>
      </Router>

    )
  }
};

export default App;

