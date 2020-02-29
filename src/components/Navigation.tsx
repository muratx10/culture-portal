import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

import LocalizedLink from './LocalizedLink';
import useMenu from './useMenu';

interface NavItem {
  link: string;
  name: string;
}

const toggleNavMenu: () => void = () => {
  const elem: HTMLElement | null = document.getElementById('basic-navbar-nav');
  if (elem !== null) {
    if (elem.classList.contains('show')) {
      elem.classList.remove('show');
      elem.classList.add('collapsing');
    }
  }
};

const Navigation = () => {
  const menuItems = useMenu();
  const createElement = (item: NavItem, index: number) => {
    return (
      <Nav.Item key={index}>
        <LocalizedLink
          className="navItem"
          activeClassName="activeNavItem"
          to={item.link}
          // onClick={toggleNavMenu}
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
