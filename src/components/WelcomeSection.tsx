import React from 'react';
import thisTranslate from './useTranslations';
import { title, text, flag, welcome } from '../styles/Welcome.module.scss';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import flagSvg from '../images/Flag-map_of_Belarus.svg';

interface Props {
  welcomeTitle: string;
  welcomeText: string;
}

const Welcome = () => {
  const { welcomeTitle, welcomeText } = thisTranslate();
  return (
    <>
      <div className={welcome}>
        <h1 className={title}>{welcomeTitle}</h1>
        <div className={flag}>
          <img src={flagSvg} alt="Flag of Belarus" />
        </div>
        <h2 className={text}>{welcomeText}</h2>
      </div>
    </>
  );
};

export default Welcome;
