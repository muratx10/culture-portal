import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import Navigation from './Navigation';
import Languages from './Languages';
import '../styles/header.scss';

interface HeaderProps {
  location: {
    pathname: string;
  };
}

const Header: React.FC<HeaderProps> = ({ location }) => {
  return (
    <header className="header">
      <div className="header-container">
        <Navbar expand="lg" variant="dark">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navigation />
          </Navbar.Collapse>
        </Navbar>
        <Languages location={location} />
      </div>
    </header>
  );
};

export default Header;
