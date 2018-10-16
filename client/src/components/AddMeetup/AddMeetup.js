import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { graphql } from "react-apollo";
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
import { createMeetup } from "../../queries/meetupQueries";

class AddMeetupForm extends Component {
  constructor() {
    super();
    this.state = {
      start_time: "",
      end_time: "",
      date: "",
      topic: "",
      redirect: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMeetup = this.addMeetup.bind(this);
  }

  addMeetup(event) {
    event.preventDefault();
    this.props
      .createMeetup({
        variables: {
          start_time: this.state.start_time,
          end_time: this.state.end_time,
          date: this.state.date,
          topic: this.state.topic
        }
      })
      .then(result => {
        this.setState({
          redirect: true
        });
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
    if (this.state.redirect === true) {
      return <Redirect to="/admin/dashboard" />;
    }

    return (
      <Container>
        <Row>
          <Col xs="12" sm="12" md={{ size: 6, offset: 3 }}>
            <Form
              onSubmit={event => {
                this.addMeetup(event);
              }}
            >
              <FormGroup>
                <Label for="start_time" className="float-left">
                  Start Time
                </Label>
                <Input
                  type="start_time"
                  name="start_time"
                  id="start_time"
                  placeholder="example 4:00pm"
                  required
                  onChange={event => {
                    this.handleInputChange(event);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="end_time" className="float-left">
                  End Time
                </Label>
                <Input
                  type="end_time"
                  name="end_time"
                  id="end_time"
                  placeholder="example 4:00pm"
                  required
                  onChange={event => {
                    this.handleInputChange(event);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date" className="float-left">
                  Date
                </Label>
                <Input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="example 1/1/2018"
                  required
                  onChange={event => {
                    this.handleInputChange(event);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="topic" className="float-left">
                  Topic
                </Label>
                <Input
                  type="topic"
                  name="topic"
                  id="topic"
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

const ComposedComponent = graphql(createMeetup, { name: "createMeetup" })(
  AddMeetupForm
);

const AddMeetup = props => <ComposedComponent />;

export default AddMeetup;
