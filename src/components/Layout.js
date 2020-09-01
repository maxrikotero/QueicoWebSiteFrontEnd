import React, { Fragment } from "react";
// import { Container, Col, Row } from "react-bootstrap";
// import Header from "./Header";
// import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Fragment key="fragment-layout">
      {/* <Header /> */}
      {children}
      {/* <Container fluid>
        <Row>
          <Col xs={12}>{children}</Col> */}
      {/* </Row>
      </Container> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Layout;
