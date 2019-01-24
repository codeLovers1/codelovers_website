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
import { events } from "../../queries/eventQueries";

class Events extends Component {
  displayEvents() {
    return (
      <Query query={events}>
        {({ loading, error, data }) => {
          // change the data structure form obj of objs to array of objs
          const events = _.map(data.events, (value, key) => ({
            key,
            ...value
          }));

          if (loading) {
            return <Loader size="3x" />;
          } else {
            return events.reverse().map(event => (
              <Col key={event.id} xs="12" sm="6" md="3" className="mb-3">
                <Card>
                  <CardHeader>{event.topic}</CardHeader>
                  <CardBody>
                    <CardText>
                      On <b>{event.date}</b> the event starts from{" "}
                      <b>{event.start_time}</b> to <b>{event.end_time}</b>.
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
      <div className="Event-section py-3">
        <Container>
          <Row>
            <Col>
              <h1 className="mb-3">Events</h1>
            </Col>
          </Row>
          <Row>{this.displayEvents()}</Row>
        </Container>
      </div>
    );
  }
}

export default Events;
