import React from 'react';
import Navigation from './navigation';
import Languages from './languages';

const Header = () => {
  return (
    <header>
      <Languages />
      <Navigation />
    </header>
  );
};

export default Header;
