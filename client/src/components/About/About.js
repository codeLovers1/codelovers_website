import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css";

const About = props => (
  <div className="About-section py-3">
    <Container>
      <Row>
        <Col>
          <h1>About Us</h1>
          <p className="text-left">
            We are community of developers based in Somaliland. We meetup once
            in every 2 weeks and learn together about technology. Everyone who
            has the interest to code can join us. Doesn't matter what background
            you are coming from. We welcome every skill level. Our Goal is to
            introduce our society the importance of programming and technology
            as general.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
