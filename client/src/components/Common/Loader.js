import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";

const Loader = props => (
  <Container className={props.classname}>
    <Row>
      <Col className="text-center">
        <h3>{props.text}</h3>
        <FontAwesomeIcon icon="spinner" spin size={props.size} />
      </Col>
    </Row>
  </Container>
);

export { Loader };
