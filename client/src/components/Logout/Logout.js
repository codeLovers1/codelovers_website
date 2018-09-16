import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Loader } from "../Common/";
import { SignOut } from "../../firebase/auth";

class Logout extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }

  componentWillMount() {
    SignOut().then(success => {
      this.setState({
        redirect: true
      });
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    return <Loader size="4x" classname="App-loading" text="Logging Out" />;
  }
}

export default Logout;
