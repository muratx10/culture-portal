import React from 'react';
import Header from './Header.tsx';
import Footer from './footer.tsx';

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
