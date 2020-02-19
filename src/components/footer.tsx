import React from 'react';
import translateThis from './useTranslations';

const Footer = () => {
  const { footerText } = translateThis();
  return (
    <footer>
      <p>{footerText}</p>
    </footer>
  );
};

export default Footer;
