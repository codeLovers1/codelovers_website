import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { AdminLayout, Loader } from "../../components/Common/";
import { adminRoutes } from "../../routes";

import "./Admin.css";

class Admin extends Component {
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
      <AdminLayout authenticated={this.state.authenticated}>
        <Switch>
          {adminRoutes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
          <Redirect from="/admin" to="/admin/dashboard" />
        </Switch>
      </AdminLayout>
    );
  }
}

export default Admin;
