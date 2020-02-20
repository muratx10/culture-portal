import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LocaleContext = React.createContext();

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

export { Layout, LocaleContext };
