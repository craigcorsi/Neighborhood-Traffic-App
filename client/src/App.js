import $ from 'jquery';
import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Main from './components/pages/Main';
import LandingPage from './components/pages/LandingPage';
import Community from './components/pages/Community';
import About from './components/pages/About';

//import Archive from './components/Archive';
import Footer from './components/Footer';
class App extends Component {
  render() {
    let url = window.location.href;
    url = url.slice(url.lastIndexOf("/") + 1);
    console.log(url);

    let mainComponent = "";
    console.log(this.props);
    switch (url) {
      case "":
        mainComponent = <LandingPage {...this.props} location="" />;
        break;
      case "main":
        mainComponent = <Main {...this.props} location="main" />
        break;
      case "community":
        mainComponent = <Community {...this.props} location="community" />;
        break;
      case "about":
        mainComponent = <About {...this.props} location="about" />;
        break;
      default:
        mainComponent = <LandingPage />;
    }

    return (
      <div>
        <Header />
        {mainComponent}
        <Footer />
      </div>
    )
  }
};

export default App;

// return (
//   <div>
//     <Header />
//     <Main />
//     <Footer />
//   </div>
// )

{/* <Router>
  <div>
    <Switch>
      {mainComponent}
    </Switch>
  </div>
</Router> */}