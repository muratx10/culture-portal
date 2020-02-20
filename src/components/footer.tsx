import React from 'react';
import useTranslations from './useTranslations';

const Footer = () => {
  const { footerText } = useTranslations();
  return (
    <footer>
      <p>Footer page</p>
    </footer>
  );
};

export default Footer;
