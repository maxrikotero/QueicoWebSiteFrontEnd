import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
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
