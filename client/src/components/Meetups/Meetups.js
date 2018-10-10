import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Loader } from "../Common/";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardBody,
  Button
} from "reactstrap";
import { meetups } from "../../queries/meetupQueries";
import "./Meetup.css";

class Meetups extends Component {
  displayMeetups() {
    const data = this.props.data;

    if (data.loading) {
      return <Loader size="3x" />;
    } else {
      return data.meetups.map(meetup => (
        <Col key={meetup.id} xs="12" sm="6" md="3" className="mb-3">
          <Card>
            <CardHeader>{meetup.topic}</CardHeader>
            <CardBody>
              <CardText>
                On <b>{meetup.date}</b> the meetup starts from{" "}
                <b>{meetup.start_time}</b> to <b>{meetup.end_time}</b>.
              </CardText>
              <CardText>Our speaaker is {meetup.speaker} </CardText>
              <Button outline color="secondary" block>
                Register
              </Button>
            </CardBody>
          </Card>
        </Col>
      ));
    }
  }

  render() {
    return (
      <div className="Meetup-section py-3">
        <Container>
          <Row>
            <Col>
              <h1>Upcoming Activities</h1>
            </Col>
          </Row>
          <Row>{this.displayMeetups()}</Row>
        </Container>
      </div>
    );
  }
}

export default graphql(meetups)(Meetups);
