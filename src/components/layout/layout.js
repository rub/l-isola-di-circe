import React from "react";
import Header from "../header/header";
import "../../global_css/modern-normalize.css";
import "../../global_css/base.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
