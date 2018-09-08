import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css";

const About = props => (
  <div className="About-section py-3">
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
            Community of Developers based in Hargeisa. We meetup and hack once
            in every 2 weeks, discussing about new technologies
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
