import React from 'react';
import { Link } from 'gatsby';
import { LocaleContext } from './layout';
import locales from '../../config/i18n';

const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext);
  const path = locales[locale].default ? to : `/${locales[locale].path}${to}`;
  return <Link {...props} to={path} />;
};

export default LocalizedLink;
