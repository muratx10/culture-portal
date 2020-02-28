import React from 'react';
import { Link } from 'gatsby';
import LocaleContext from './LocaleContext';
import locales from '../../config/i18n';

const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext);
  if (to.startsWith('http')) {
    const { children, activeClassName, ...restProps } = props;
    return (
      <a {...restProps} href={to} target="_blank">
        {children}
      </a>
    );
  } else {
    const path = locales[locale].default ? to : `/${locales[locale].path}${to}`;
    return <Link {...props} to={path} />;
  }
};

export default LocalizedLink;
