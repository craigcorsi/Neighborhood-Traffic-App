import React, { Component } from "react";
import "./App.css";
import Header from './components/Header';
import HeaderNav from './components/Header/HeaderNav';
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
