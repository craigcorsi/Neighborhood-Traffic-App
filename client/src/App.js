import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header';
// import Main from './components/pages/Main';
 import LandingPage from './components/pages/LandingPage';
 import Community from './components/pages/Community';
 import About from './components/pages/About';
import AuthApp from "./AuthApp/AuthApp"
import AuthPage from "./AuthPage/AuthPage"
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
//import NoMatch from "./components/pages/NoMatch";

// import Archive from './components/Archive';
import Footer from './components/Footer';
import API from "./utils/API";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => (
  <Router history={history} component={AuthApp}>
    <div>
     <Header /> 
    <h1 className="App-title">Welcome to the Neighborhood</h1>           
    <h1 className="App-title">DEMO</h1>
        <Route exact path="/" render={(props) => <AuthApp auth={auth} {...props} />} />
        <Route exact path="/community" render={(props) => <Community {...props} />} />
        <Route exact path="/callback" render={(props) => <Callback {...props} />} />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route exact path="/landing" render={(props) => <LandingPage {...props} />} />
 {/* <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />        */}
 {/* <Route exact path="/main/pg1" render={(props) => <Main {...props} />} />        */}
      </div>
  </Router>

// export const makeMainRoutes = () => {
//   return (
//     <Router history={history} component={App}>
//       <div>
//         <Route path="/" render={(props) => <App auth={auth} {...props} />} />
//         <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
//         <Route path="/callback" render={(props) => {
//           handleAuthentication(props);
//           return <Callback {...props} /> 
//         }}/>
//       </div>
//     </Router>
//   );
 );


// class App extends Component {
//   state = {
//     currentAppletData: "test"
//   }

//    render() {

//     return (
//       <Router>
//         <div>
//           <h1 className="App-title">Welcome to the Neighborhood, {this.props.name}.</h1>
//           <h1 className="App-title">DEMO</h1> 
//           <Header />
//              <Switch>
//             <Route exact path="/" component={LandingPage} /> 
//             <Route path="/main/:mapId" component={Main} />
//             <Route path="/community" component={Community} />
//             <Route path="/about" component={About} 
//             <Route component={LandingPage} />
//           </Switch> 
//           <Footer />
//         </div>
//       </Router>

//     )
//   }
// };

export default App;

