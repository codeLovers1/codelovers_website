import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import Home from "./pages/Home/Home.js";

// add icons to the library
library.add(faSpinner, faCopyright, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
