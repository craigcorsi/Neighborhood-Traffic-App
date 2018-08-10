import React from 'react';
import "./Header.css";
import HeaderNav from './HeaderNav';
import { PageHeader } from 'react-bootstrap';

const Header = props =>
<div className='container'>
    <PageHeader className="App-header">Sandpile-Up <small>Traffic simulator</small>
    </PageHeader>
    <HeaderNav />     
</div>;
export default Header;