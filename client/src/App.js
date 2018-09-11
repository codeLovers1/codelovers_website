import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavigationBar } from "./components/Common/";
import Footer from "./components/Footer/Footer";
import "./loadIcons";
import "./App.css";
import routes from "./routes";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false
    };
  }
  render() {
    return (
      <div className="App">
        <NavigationBar authenticated={this.state.authenticated} />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
