import React from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

import LocaleContext from './LocaleContext';

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
