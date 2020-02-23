import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from './localeContext';

interface ITranslateItem {
  node: {
    name: string;
    translations: string;
  };
}

interface ILang {
  name: string;
}

function useTranslations() {
  const { locale } = React.useContext(LocaleContext);
  const { rawData } = useStaticQuery(query);
  const { translations } = rawData.edges
    .map((item: ITranslateItem) => ({
      name: item.node.name,
      translations: item.node.translations,
    }))
    .find((lang: ILang) => lang.name === locale);
  return translations;
}

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            home
            footerText
            wasBorn

            next
            prev
            of

            findPoet
          }
        }
      }
    }
  }
`;
