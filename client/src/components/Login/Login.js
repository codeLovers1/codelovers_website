import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // SignInWithEmailAndPassword,
  SignInWithGuthub
} from "../../firebase/auth";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind(this);
    this.authWithGithub = this.authWithGithub.bind(this);
  }

  authWithEmailAndPassword(event) {
    event.preventDefault();
    console.table([
      {
        email: this.state.email,
        password: this.state.password
      }
    ]);
  }

  authWithGithub() {
    console.log("Auth with Github");
    SignInWithGuthub();
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.value;
    const { name } = target;

    // update the state
    this.setState({
      [name]: value
    });
    console.log(this.state);
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
            <Button
              color="secondary"
              block
              onClick={() => this.authWithGithub()}
            >
              Sign In with <FontAwesomeIcon icon={["fab", "github"]} /> Github
            </Button>
            <hr className="mt-3 mb-3" />
            <Alert color="secondary text-left">
              <h4 className="alert-heading">
                <FontAwesomeIcon icon="info-circle" /> NOTE
              </h4>
              <p>
                If you don't have account and you don't have Github, this form
                will create one for you. If you already got account it will sign
                in you.
              </p>
            </Alert>
            <Form
              onSubmit={event => {
                this.authWithEmailAndPassword(event);
              }}
              ref={form => {
                this.loginForm = form;
              }}
            >
              <FormGroup>
                <Label for="email" className="float-left">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={event => {
                    this.handleInputChange(event);
                  }}
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
                  onChange={event => {
                    this.handleInputChange(event);
                  }}
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
