import React from "react";
import { Container, Row, Col } from "reactstrap";

const About = props => (
  <Container>
    <Row>
      <Col>
        <div className="App-about-section pt-4">
          <h1>About Us</h1>
          <p>
            Community of Developers based in Hargeisa. We meetup and hack once
            in every 2 weeks, discussing about new technologies
          </p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default About;
