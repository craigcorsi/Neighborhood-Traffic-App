import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
//import Archive from './components/Archive';
import Footer from './components/Footer';

import Secret from "./components/Secret";
import NotFound from "./components/NotFound";
import Callback from "./components/Callback";

class App extends Component {
  render() {
    let mainComponent = ""
   
    switch (this.props.location)
     {
      case "":
          mainComponent = <Main {...this.props} />;
          break;
      case "callback":
          mainComponent = <Callback/>
          break;
      case "secret":
          mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props}/>:<NotFound/>;
          break;
      default:
          mainComponent = <NotFound />;

    }

    return (
      <div>
      <Header />
    
      <Footer />
      <h1 className="App-title">Welcome to the Neighborhood, {this.props.name}.
      </h1>
      {mainComponent}
    </div>
    )
  }
};

export default App;
