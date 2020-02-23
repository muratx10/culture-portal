import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Head from '../components/head';

const notFound = {
  en: {
    name: '404',
    home: 'Head home',
    body: `We can't seem to find the page you're looking for`,
    img:
      'https://i.pinimg.com/originals/08/90/07/089007e721e1f22809c0313b670a36f1.gif',
  },
  ru: {
    name: '404',
    home: 'Домой',
    body: `Мы не можем найти страницу, которую вы ищете`,
    img:
      'https://i.pinimg.com/originals/08/90/07/089007e721e1f22809c0313b670a36f1.gif',
  },
  by: {
    name: '404',
    home: 'Дадому',
    body: `Мы не можам знайсці старонку, якую вы шукаеце`,
    img:
      'https://i.pinimg.com/originals/08/90/07/089007e721e1f22809c0313b670a36f1.gif',
  },
};

const NotFound = props => {
  if (notFound[props.location.pathname.substring(1, 3)] === undefined) {
    notFound[props.location.pathname.substring(1, 3)] = notFound.en;
  }
  return (
    <>
      <Head title="404"/>
      <h1>{notFound[props.location.pathname.substring(1, 3)].name}</h1>
      <p>
        <Link to="/">{notFound[props.location.pathname.substring(1, 3)].home}</Link>
      </p>
      <p>{notFound[props.location.pathname.substring(1, 3)].body}</p>
      <img
        src={notFound[props.location.pathname.substring(1, 3)].img}
        alt="404"
      />
    </>
  );
};

export default NotFound;
