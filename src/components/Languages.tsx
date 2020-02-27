import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/languages.css";

const locales = {
  en: {
    default: true,
    path: "en",
    locationPath: "/",
    locale: "en-US",
    dateFormat: "DD/MM/YYYY",
    name: "En"
  },
  ru: {
    path: "ru",
    locationPath: "/ru/",
    locale: "ru-RU",
    dateFormat: "DD/MM/YYYY",
    name: "Ru"
  },
  by: {
    path: "by",
    locationPath: "/by/",
    locale: "be-BY",
    dateFormat: "DD/MM/YYYY",
    name: "By"
  }
};

const Languages = ({ location }) => {
  const path = location.pathname;
  let pathSuffix = path.substr(1);
  let currLang = "En ";
  if (path.length > 1) {
    Object.keys(locales).some(lang => {
      const { locationPath } = locales[lang];
      if (locationPath.length > 1 && path.startsWith(locationPath)) {
        pathSuffix = path.substr(locationPath.length);
        currLang = `${lang[0].toUpperCase()}${lang[1]} `;
        return true;
      }
      return false;
    });
  }
  return (
    <DropdownButton id="dropdown-basic-button" title={currLang} size="sm">
      {Object.keys(locales).map(lang => (
        <Dropdown.Item key={locales[lang].path}>{locales[lang].name}</Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default Languages;
