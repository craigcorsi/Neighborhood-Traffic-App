

import React from 'react';
import "./HeaderNav.css";
import {Nav, NavItem, NavDropdown, MenuItem, Navbar} from 'react-bootstrap';

const HeaderNav = props =>
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
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        About
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
export default HeaderNav;