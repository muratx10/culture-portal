import React from 'react';
import translateThis from '../components/useTranslations';

const IndexPage = () => {
  const {
    home,
    mainPageContent
  } = translateThis();
  return (
    <div className="main-page">
      <h1>{home}!</h1>
      <p>{mainPageContent}</p>
    </div>
  );
};

export default IndexPage;
