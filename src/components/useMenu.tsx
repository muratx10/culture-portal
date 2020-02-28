import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import LocaleContext from './LocaleContext';

interface TranslateItem {
  node: {
    name: string;
    translations: {
      menuItems: string;
    };
  };
}

interface Lang {
  name: string;
}

function useMenu() {
  const { locale } = React.useContext(LocaleContext);
  const { rawData } = useStaticQuery(query);
  const { menuItems } = rawData.edges
    .map((item: TranslateItem) => ({
      name: item.node.name,
      menuItems: item.node.translations.menuItems,
    }))
    .find((lang: Lang) => lang.name === locale);
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
