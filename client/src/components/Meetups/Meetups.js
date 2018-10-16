import _ from "lodash";
import React, { Component } from "react";
import { Query } from "react-apollo";
import { Loader } from "../Common/";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardText,
  CardBody
} from "reactstrap";
import { meetups } from "../../queries/meetupQueries";
import "./Meetup.css";

class Meetups extends Component {
  displayMeetups() {
    return (
      <Query query={meetups} variables={{ limit: 4 }}>
        {({ loading, error, data }) => {
          // change the data structure form obj of objs to array of objs
          const meetups = _.map(data.meetups, (value, key) => ({
            key,
            ...value
          }));

          if (loading) {
            return <Loader size="3x" />;
          } else {
            return meetups.reverse().map(meetup => (
              <Col key={meetup.id} xs="12" sm="6" md="3" className="mb-3">
                <Card>
                  <CardHeader>{meetup.topic}</CardHeader>
                  <CardBody>
                    <CardText>
                      On <b>{meetup.date}</b> the meetup starts from{" "}
                      <b>{meetup.start_time}</b> to <b>{meetup.end_time}</b>.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            ));
          }
        }}
      </Query>
    );
  }

  render() {
    return (
      <div className="Meetup-section py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="mb-3">Upcoming Activities</h1>
            </Col>
          </Row>
          <Row>{this.displayMeetups()}</Row>
        </Container>
      </div>
    );
  }
}

export default Meetups;
