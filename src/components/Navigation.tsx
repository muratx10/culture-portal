import React from "react";
import { Nav } from "react-bootstrap";

import "../styles/navigation.css";
import "bootstrap/dist/css/bootstrap.css";

interface INavItem {
  link: string;
  name: string;
}

const Navigation = () => {
  const menuItems = [
    { name: "Menu 1", link: "" },
    { name: "Menu 2", link: "" },
    { name: "Menu 3", link: "" },
    { name: "Menu 4", link: "" }
  ];

  return (
    <div className="navbar-container">
      <Nav>
        {menuItems.map((item: INavItem, index: number) => (
          <Nav.Item key={index}>
            <a className="navItem" href="#">
              {item.name}
            </a>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default Navigation;
