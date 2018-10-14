import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Loader } from "./";

const PrivateRoute = ComposedComponent => {
  return class RequireAuth extends Component {
    state = {
      authenticated: false,
      loading: true
    };

    componentDidMount() {
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
      const { authenticated, loading } = this.state;
      if (loading) {
        return <Loader size="4x" classname="App-loading" text="Loading" />;
      }
      if (!authenticated) {
        return (
          <Redirect
            to={{
              pathname: "/admin/login",
              state: {
                from: this.props.location
              }
            }}
          />
        );
      }
      return <ComposedComponent {...this.props} />;
    }
  };
};

export { PrivateRoute };
