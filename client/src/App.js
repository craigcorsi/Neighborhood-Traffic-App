import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
<<<<<<< HEAD
import Main from './components/Main';
<<<<<<< HEAD
import Archive from './components/Archive';
=======
=======
import Main from './components/pages/Main';
import LandingPage from './components/pages/LandingPage';
import Community from './components/pages/Community';
import About from './components/pages/About';

<<<<<<< HEAD
>>>>>>> 5f712bc803cc752d88cba021d6ab0b61362b817a
//import Archive from './components/Archive';
>>>>>>> f79ab80b59f0a8f2871a3bde1c7dc77c02d57384
=======
// import Archive from './components/Archive';
>>>>>>> 5d4435c920416bfe7d57136b1de9a4292519f990
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
<<<<<<< HEAD
<<<<<<< HEAD
        <div>
        <Header />
        < Main/>
        <Footer />
      </div>
=======
      <div>
<<<<<<< HEAD
      <Header />
      <Main />
      <Footer />
    </div>
>>>>>>> f79ab80b59f0a8f2871a3bde1c7dc77c02d57384
=======
        <Header />
        {mainComponent}
        <Footer />
      </div>
>>>>>>> 5f712bc803cc752d88cba021d6ab0b61362b817a
=======
      <Router>
        <div>
          <h1 className="App-title">Welcome to the Neighborhood, {this.props.name}.</h1>
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

>>>>>>> 5d4435c920416bfe7d57136b1de9a4292519f990
    )
  }
};

export default App;

