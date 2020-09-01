import React from "react";
import "./styles.css";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";

export default function App() {
  return (
    <React.Fragment key="App-Container">
      <Home />
      <About />
      <Product />
      <Contact />
    </React.Fragment>
  );
}
