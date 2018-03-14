import React from 'react';
import Navigation from './components/Navigation';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../../Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="">EXAMPLE</a>
          </Navbar.Brand>
          <Navigation />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="">
              OUR WORK
            </NavItem>
            <NavItem eventKey={2} href="">
              OUR APPROACH
            </NavItem>
            <NavItem eventKey={3} href="">
              SECRET SAUCE INSIGHT
            </NavItem>
            <NavItem eventKey={4} href="">
              CAREERS
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
