import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardBody,
  Button
} from 'reactstrap';
import { meetups } from '../../queries/meetupQueries';

class Meetups extends Component {
  
  displayMeetups() {
    const data = this.props.data;

    if(data.loading) {
      return (
        <Col>
          <FontAwesomeIcon
            icon="spinner" 
            spin 
            size="3x"
          />
        </Col>
      );
    } else {
      return data.meetups.map(meetup => (
        <Col key={meetup.id} xs="12" sm="6" md="3" className="mb-3">
          <Card>
            <CardHeader>{meetup.topic}</CardHeader>
            <CardBody>
              <CardText>On <b>{meetup.date}</b> the meetup starts from <b>{meetup.start_time}</b> to <b>{meetup.end_time}</b>.</CardText>
              <CardText>Our speaaker is {meetup.speaker} </CardText>
              <Button outline color="secondary" block>Register</Button>
            </CardBody>
          </Card>
        </Col>
      ));
    }
  }

  render() {
    return (
      <Container>
        <Row className="mt-4">
          <Col>
            <h1>Upcoming Meetups</h1>
          </Col>
        </Row>
        <Row>
          { this.displayMeetups() }
        </Row>
      </Container>
    );
  }  
};

export default graphql(meetups)(Meetups);