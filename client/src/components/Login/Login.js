import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
  SignInWithEmailAndPassword,
  CreateUserWithEmailAndPassword,
  SignInWithGuthub
} from "../../firebase/auth";
import { auth } from "../../firebase/firebase";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind(this);
    this.authWithGithub = this.authWithGithub.bind(this);
  }

  authWithEmailAndPassword(event) {
    event.preventDefault();

    const { email, password } = this.state;
    // Fetch providers to check if the user already used one.
    auth
      .fetchSignInMethodsForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          // create user
          return CreateUserWithEmailAndPassword(email, password);
        } else if (providers.indexOf("password") === -1) {
          // they used facebook
          // this.loginForm.reset();
          console.log("you used Github");
        } else {
          // sign them in
          return SignInWithEmailAndPassword(email, password);
        }
      })
      .then(user => {
        console.log("here");
        if (user) {
          // this.loginForm.reset();
          this.setState({
            redirect: true
          });
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  }

  authWithGithub() {
    SignInWithGuthub().then((result, error) => {
      if (error) {
        console.log(error);
      } else {
        this.setState({
          redirect: true
        });
      }
    });
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.value;
    const { name } = target;

    // update the state
    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

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
