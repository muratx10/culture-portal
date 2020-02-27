import React from 'react';
import { Nav } from 'react-bootstrap';

import LocalizedLink from './LocalizedLink';
import useMenu from './useMenu';

interface INavItem {
  link: string;
  name: string;
}

const Navigation = () => {
  const menuItems = useMenu();
  const CreateElement = (item, index) => {
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
      <Nav>
        {menuItems.map((item: INavItem, index: number) =>
          CreateElement(item, index)
        )}
      </Nav>
    </div>
  );
};

export default Navigation;
