import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import Layout from "../src/components/Layout";
import AppContext from "../src/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <AppContext>
        <App />
      </AppContext>
    </Layout>
  </React.StrictMode>,
  rootElement
);
