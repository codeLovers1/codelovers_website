import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind();
  }

  authWithEmailAndPassword(event) {
    event.preventDefualt();
    console.table([
      {
        email: event.emailInput.value,
        password: event.passwordInput.value
      }
    ]);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            md={{ size: 6, offset: 3 }}
            className="Login-form"
          >
            <Button color="secondary" block>
              Sign In with <FontAwesomeIcon icon={["fab", "github"]} /> Github
            </Button>
            <hr className="mt-3 mb-3" />
            <Form onSubmit={event => this.authWithEmailAndPassword(event)}>
              <FormGroup>
                <Label for="email" className="float-left">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="float-left">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </FormGroup>
              <Button outline color="secondary" block>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
