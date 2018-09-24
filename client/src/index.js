import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";

// Apollo Setup
const apolloClient = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
