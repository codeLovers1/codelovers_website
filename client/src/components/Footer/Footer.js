import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { SocailMediaIcon } from "../Common";
import "./Footer.css";

const Footer = () => (
  <div className="App-footer position-sticky py-3">
    <Container>
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
                url="https://www.instagram.com/codelovers_"
                iconName="instagram"
                iconSize="2x"
              />
            </Col>
            <Col xs="4" sm="4" md="1">
              <SocailMediaIcon
                url="https://twitter.com/CodeLovers_"
                iconName="twitter"
                iconSize="2x"
              />
            </Col>
            <Col xs="4" sm="4" md="1">
              <SocailMediaIcon
                url="https://github.com/codeLovers1"
                iconName="github"
                iconSize="2x"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
