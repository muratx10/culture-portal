import React from 'react';
import Header from './Header';
import Footer from './Footer';

import LocaleContext from './LocaleContext';

interface Props {
  children: object;
  pageContext: {
    locale?: string;
  };
  location: object;
}

const Layout: React.FC<Props> = ({
  children,
  pageContext: { locale },
  location,
}) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <div className="container flex-container">
        <Header location={location} />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </LocaleContext.Provider>
  );
};

export default Layout;
