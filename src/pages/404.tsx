import React from 'react';
import { Link } from 'gatsby';
// import { Layout } from '../components/layout';

const NotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </div>
  );
};

export default NotFound;
