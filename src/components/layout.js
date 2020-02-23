import React from 'react';
import Header from './header';
import Footer from './footer';

import LocaleContext from './localeContext';

const Layout = ({ children, pageContext: { locale }, location }) => {
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
