import React from 'react';
import useTranslations from '../components/useTranslations';
import styles from '../styles/404.module.scss';
import Head from '../components/Head.tsx';

const NotFound = () => {
  const { pageNotFound, pageNotFoundBody } = useTranslations();
  return (
    <div className={styles.block}>
      <Head title="404" />
      <section>
        <h1>{pageNotFound}</h1>
        <p>{pageNotFoundBody}</p>
      </section>      
      <img
        src="https://i.pinimg.com/originals/08/90/07/089007e721e1f22809c0313b670a36f1.gif"
        alt="page not found"
      />
    </div>
  );
};

export default NotFound;