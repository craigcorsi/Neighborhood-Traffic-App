import React from 'react';
import "./Header.css";
import { Jumbotron } from 'react-bootstrap';

const Header = props =>
<Jumbotron>
    <div className = "container">
        <header className="App-header">
            <h1 className="App-title">Neighborhood Traffic App</h1>
        </header>
    </div>
</Jumbotron>
export default Header;