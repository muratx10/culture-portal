import React from 'react';
import Navigation from './navigation';
import Languages from './languages';
import { Navbar } from 'react-bootstrap';

const Header = ({ location }: { location: object }) => {
  return (
    <header className="header">
      <Languages location={location} />
      <Navigation />
    </header>
  );
};

export default Header;
