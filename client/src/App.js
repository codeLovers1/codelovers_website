import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { NavigationBar, Loader } from "./components/Common/";
import Footer from "./components/Footer/Footer";
import "./utils/loadIcons";
import routes from "./routes";
import { auth } from "./firebase/firebase";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      authenticated: false,
      loading: true
    };
  }

  componentWillMount() {
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
