import React from "react";
import Footer from "../../components/Footer/Footer";
import { NavigationBar } from "./";

const Layout = props => (
  <div>
    <NavigationBar />
    {props.children}
    <Footer />
  </div>
);

export { Layout };
