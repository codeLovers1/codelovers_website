import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {
  NavigationBar,
  AdminNavigationBar,
  Loader
} from "./components/Common/";
import Footer from "./components/Footer/Footer";
import "./utils/loadIcons";
import { routes, adminRoutes } from "./routes";
import { auth } from "./firebase/firebase";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
      loading: true
    };

    this.location = window.location.pathname;
  }

  componentWillMount() {
    console.log(this.location);
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false
        });
        console.log(user);
      } else {
        this.setState({
          authenticated: false,
          loading: false
        });
      }
    });
  }

  render() {
    if (this.state.loading) {
      return <Loader size="4x" classname="App-loading" text="Loading" />;
    }

    return (
      <div className="App">
        {this.location === "/admin" ? (
          <div>
            <AdminNavigationBar authenticated={this.state.authenticated} />
            <Switch>
              {adminRoutes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </div>
        ) : (
          <div>
            <NavigationBar />
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default App;
