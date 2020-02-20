import React from 'react';
import { Link } from 'gatsby';
import locales from '../../config/i18n';

const Languages = ({ location }) => {
  const path = location.pathname;
  let pathSuffix = path.substr(1);
  if (path.length > 1) {
    Object.keys(locales).some(lang => {
      const { locationPath } = locales[lang];
      if (locationPath.length > 1 && path.startsWith(locationPath)) {
        pathSuffix = path.substr(locationPath.length);
        return true;
      }
      return false;
    });
  }
  return (
    <ul>
      {Object.keys(locales).map((lang) => (
        <li key={locales[lang].path}>
          <Link
            to={`${locales[lang].locationPath}${pathSuffix}`}
            activeClassName="activeLanguageLinkClassName"
          >
            {locales[lang].name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Languages;
