import React from 'react';
import { Link } from 'gatsby';
import useTranslations from '../components/useTranslations';

const NotFound = () => {
  const { home, pageNotFound, pageNotFoundBody } = useTranslations();
  return (
    <>
      <h1>{pageNotFound}</h1>
      <p>
        <Link to="/">{home}</Link>
      </p>
      <p>{pageNotFoundBody}</p>
      <img
        src="https://i.pinimg.com/originals/08/90/07/089007e721e1f22809c0313b670a36f1.gif"
        alt="page not found"
      />
    </>
  );
};

export default NotFound;
