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

import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";
import API from "./utils/API";



class App extends Component {
  render() {
    // let mainComponent = ""
   
    // switch (this.props.location)
    //  {
    //   case "":
    //       mainComponent = <Main {...this.props} />;
    //       break;
    //   case "callback":
    //       mainComponent = <Callback/>
    //       break;
    //   case "secret":
    //       mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/>:<NotFound/>;
    //       break;
    //   default:
    //       mainComponent = <NotFound />;

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
    {/* //   <Header />
    
    //   <Footer />
    //   <h1 className="App-title">Welcome to the Neighborhood, {this.props.name}.
    //   </h1>
    //   {mainComponent}
    // </div> */}
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