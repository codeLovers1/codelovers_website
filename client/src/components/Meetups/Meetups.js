import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const meetups = gql`
  {
    meetups {
      id
      start_time
      end_time
      date
      topic
      speaker
    }
  }
`; 

class Meetups extends Component {
  
  displayMeetups() {
    const data = this.props.data;

    if(data.loading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    } else {
      return data.meetups.map(meetup => (
        <div key={meetup.id}>
          <h3>{meetup.topic}</h3>
          <h3>{meetup.speaker}</h3>
        </div>
      ));
    }
  }

  render() {
    return (
      <div>
        <h1>Meetups</h1>
        { this.displayMeetups() }
      </div>
    );
  }  
};

export default graphql(meetups)(Meetups);