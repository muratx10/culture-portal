import React from 'react';
import Navigation from './navigation';
import Languages from './languages';

const Header = ({ location }: { location: object }) => {
  return (
    <header>
      <Languages location={location} />
      <Navigation />
    </header>
  );
};

export default Header;
