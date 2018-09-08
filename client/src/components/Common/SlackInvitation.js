import React from "react";
import { Container, Row, Col, Button } from "reactstrap";

const SlackInvitation = props => (
  <div className="SlackInvitation py-3">
    <Container>
      <Row>
        <Col>
          <p>
            We Share resources and meetup code, ask questions, we have fun in
            our slack group.
          </p>
          <Button>
            <a
              className="text-white"
              href="https://join.slack.com/t/codeloversworld/shared_invite/enQtNDMzMDQxMjE1MDE0LWQ5M2M5NDQ2MmQwMDg5MTRkNmUxZGI0NWI2NDVkNjM4NmU4NDg4ZWI3MGJmOTQzNzJkMDA3MDZlOGRjYjVhYTA"
            >
              Join Us
            </a>
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export { SlackInvitation };
