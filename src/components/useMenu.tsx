import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from './localeContext';

interface ITranslateItem {
  node: {
    name: string;
    translations: {
      menuItems: string;
    };
  };
}

interface ILang {
  name: string;
}

function useMenu() {
  const { locale } = React.useContext(LocaleContext);
  const { rawData } = useStaticQuery(query);
  const { menuItems } = rawData.edges
    .map((item: ITranslateItem) => ({
      name: item.node.name,
      menuItems: item.node.translations.menuItems,
    }))
    .find((lang: ILang) => lang.name === locale);
  return menuItems;
}

export default useMenu;

const query = graphql`
  query useMenu {
    rawData: allFile(filter: { sourceInstanceName: { eq: "menu" } }) {
      edges {
        node {
          name
          translations: childMenuJson {
            menuItems {
              link
              name
            }
          }
        }
      }
    }
  }
`;
