import React, { Fragment } from "react";
// import { Container, Col, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment key="fragment-layout">
      <Header />
      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
