import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "../global_css/modern-normalize.css";
import "../global_css/base.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
