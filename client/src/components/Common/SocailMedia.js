import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocailMediaIcon = props => (
  <a href={props.url} className="text-dark">
    <FontAwesomeIcon icon={["fab", props.iconName]} size={props.iconSize} />
  </a>
);

export { SocailMediaIcon };
