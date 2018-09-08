import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import routes from "./routes";

// add icons to the library
library.add(faSpinner, faCopyright, fab);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
