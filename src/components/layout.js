import React from 'react';
import Header from './header';
import Footer from './footer';

const LocaleContext = React.createContext();

const Layout = ({ children, pageContext: { locale } }) => {
  return (
    <LocaleContext.Provider value={{ locale }}>
      <Header />
      <section role="main">
        <div>{children}</div>
      </section>
      <Footer />
    </LocaleContext.Provider>
  );
};

export { Layout, LocaleContext };
