import React from 'react';
import "./HeaderNav.css";
import {Nav, NavItem, Navbar} from 'react-bootstrap';

const HeaderNav = props =>
<div className="nav">
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">Home</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Archive
      </NavItem>
      <NavItem eventKey={2} href="#">
        Community
      </NavItem>
    </Nav>
    <Nav>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>;
export default HeaderNav;