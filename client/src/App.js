import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import { NavigationBar } from "./components/Common";
import Meetups from "./components/Meetups/Meetups";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// add icons to the library
library.add(faSpinner, faCopyright, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <Header />
        <Meetups />
        <Footer />
      </div>
    );
  }
}

export default App;
