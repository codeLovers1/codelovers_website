import React from "react";
import { AdminNavigationBar } from "./";

const AdminLayout = props => (
  <div>
    <AdminNavigationBar authenticated={props.authenticated} />
    {props.children}
  </div>
);

export { AdminLayout };
