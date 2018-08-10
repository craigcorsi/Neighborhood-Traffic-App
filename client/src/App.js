import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Archive from './components/Archive';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <HeaderNav />
      <Footer />
    </div>
    )
  }
};

export default App;
