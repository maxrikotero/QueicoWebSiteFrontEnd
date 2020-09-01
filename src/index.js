import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./asset/css/owl.carousel.css";
import "./asset/css/animate.css";
import "./asset/css/magnific-popup.css";
import "./asset/css/owl.theme.default.min.css";
import "./asset/css/templatemo-style.css";
import App from "./App";
import Layout from "../src/components/Layout";
import AppContextProvider from "../src/context";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Layout>
  </React.StrictMode>,
  rootElement
);
