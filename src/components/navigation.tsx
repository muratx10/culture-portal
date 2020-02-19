import React from 'react';
import LocalizedLink from './localizedlink';
import useMenu from './useMenu';

interface INavItem {
  link: string;
  name: string;
}

const Navigation = () => {
  const menuItems = useMenu();
  return (
    <nav>
      <ul>
        {menuItems.map((item: INavItem, index: number) => (
          <li key={index}>
            <LocalizedLink
              className="navItem"
              activeClassName="activeNavItem"
              to={item.link}
            >
              {item.name}
            </LocalizedLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
