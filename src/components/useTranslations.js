import React from 'react';
import LocaleContext from './LocaleContext';
import lang from '../../config/translations/translation.json';

function useTranslations() {
  const { locale } = React.useContext(LocaleContext);
  return lang[locale];
}

export default useTranslations;
