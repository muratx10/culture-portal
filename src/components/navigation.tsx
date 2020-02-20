import React from 'react';
import { Nav } from 'react-bootstrap';

import LocalizedLink from './localizedlink';
import useMenu from './useMenu';

interface INavItem {
  link: string;
  name: string;
}

const Navigation = () => {
  const menuItems = useMenu();

  return (
    <div className="mr-auto">
      <Nav>
        {menuItems.map((item: INavItem, index: number) => (
          <Nav.Item key={index}>
            <LocalizedLink
              className="navItem"
              activeClassName="activeNavItem"
              to={item.link}
            >
              {item.name}
            </LocalizedLink>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Navigation;
