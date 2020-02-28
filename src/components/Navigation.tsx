import React from 'react';
import { Nav } from 'react-bootstrap';

import LocalizedLink from './LocalizedLink';
import useMenu from './useMenu';

interface NavItem {
  link: string;
  name: string;
}

const Navigation = () => {
  const menuItems = useMenu();
  const createElement = (item: NavItem, index: number) => {
    return (
      <Nav.Item key={index}>
        <LocalizedLink
          className="navItem"
          activeClassName="activeNavItem"
          to={item.link}
        >
          {item.name}
        </LocalizedLink>
      </Nav.Item>
    );
  };
  return (
    <div className="navbar-container">
      <Nav>{menuItems.map(createElement)}</Nav>
    </div>
  );
};

export default Navigation;
