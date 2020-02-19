import React from 'react';
import translateThis from '../components/useTranslations';

const StyleguidePage = () => {
  const {
    styleguide
  } = translateThis();
  return (
    <div className="styleguide-page">
      <h1>{styleguide} page</h1>
      <p>Page with styleguide</p>
    </div>
  );
};

export default StyleguidePage;
