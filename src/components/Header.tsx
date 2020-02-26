import React from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from './Navigation';
import Languages from './Languages';

const Header = ({ location }: { location: object }) => {
  return (
    <header className="header">
      <Navbar expand="sm">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation />
        </Navbar.Collapse>
      </Navbar>
      <Languages location={location} />
    </header>
  );
};

export default Header;
