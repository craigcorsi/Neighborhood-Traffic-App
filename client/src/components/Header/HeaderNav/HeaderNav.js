import React from 'react';
import "./HeaderNav.css";
import {Nav, NavItem, Navbar} from 'react-bootstrap';

const HeaderNav = props =>
<div className="nav">
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Home</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={2} href="/community">
        Community
      </NavItem>
    </Nav>
    <Nav>
      <NavItem eventKey={1} href="/about">
        About
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>;
export default HeaderNav;