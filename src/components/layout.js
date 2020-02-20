import React from 'react';
import Header from './header';
import Footer from './footer';

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale }, location }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </LocaleContext.Provider>
  );
};

export { Layout, LocaleContext };
