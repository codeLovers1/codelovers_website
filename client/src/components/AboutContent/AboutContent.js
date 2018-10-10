import React from "react";
import { Container, Row, Col } from "reactstrap";

const AboutContent = props => (
  <div className="py-3">
    <Container>
      <Row>
        <Col>
          <Row>
            <Col className="text-left mt-5" xs="12" sm="8" md="8">
              <h3>Who we are?</h3>
              <p>Community of Developers based in Somaliland.</p>

              <h3>What we do?</h3>
              <p>
                We meetup once in every 2 weeks and learn together about
                technology.
              </p>

              <h3>Who can join us?</h3>
              <p>
                Everyone who has the interest to code. Doesn't what background
                you are coming from.
              </p>

              <h3>What is our goal?</h3>
              <p>
                To introduce our society the importance of programming and
                technology as general.
              </p>

              <h3>What are our activities?</h3>
              <ul>
                <li>meetups</li>
                <li>events</li>
                <li>hackathons</li>
              </ul>
              <h3>Our Collaborators</h3>
              <ul>
                <li>Horn Of Silicon</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutContent;
