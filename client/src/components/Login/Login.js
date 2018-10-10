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
  Button
} from "reactstrap";
import { Intent } from "@blueprintjs/core";
import { AppToaster } from "../../utils/";
import { SignInWithEmailAndPassword } from "../../firebase/auth";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
    this.loginForm = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.authWithEmailAndPassword = this.authWithEmailAndPassword.bind(this);
  }

  authWithEmailAndPassword(event) {
    event.preventDefault();

    const { email, password } = this.state;

    SignInWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          this.loginForm.reset();
          this.setState({
            redirect: true
          });
        }
      })
      .catch(error => {
        this.loginForm.current.reset();
        this.toastIt(Intent.DANGER, error.message);
      });
  }

  toastIt(classname, message) {
    AppToaster.show({
      intent: classname,
      message: message
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
      return <Redirect to="/admin" />;
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
            <Form
              onSubmit={event => {
                this.authWithEmailAndPassword(event);
              }}
              innerRef={this.loginForm}
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
                  required
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
                  required
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
