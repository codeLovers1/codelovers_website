import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { SocailMediaIcon } from "../Common";

const Footer = () => (
  <Container className="position-sticky pb-1">
    <Row>
      <Col xs="12" sm="6" md="6">
        <p>
          <FontAwesomeIcon icon="copyright" /> Copyright 2018
        </p>
      </Col>
      <Col xs="12" sm="6" md="6">
        <Row>
          <Col xs="4" sm="4" md={{ size: 1, offset: 5 }}>
            <SocailMediaIcon
              url="https://instagram.com"
              iconName="instagram"
              iconSize="2x"
            />
          </Col>
          <Col xs="4" sm="4" md="1">
            <SocailMediaIcon
              url="https://twitter.com"
              iconName="twitter"
              iconSize="2x"
            />
          </Col>
          <Col xs="4" sm="4" md="1">
            <SocailMediaIcon
              url="https://github.com"
              iconName="github"
              iconSize="2x"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Footer;
