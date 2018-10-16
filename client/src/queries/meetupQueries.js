import { gql } from "apollo-boost";

const meetups = gql`
  query($limit: Int = 0) {
    meetups(limit: $limit) {
      id
      start_time
      end_time
      date
      topic
    }
  }
`;

const createMeetup = gql`
  mutation(
    $start_time: String!
    $end_time: String!
    $date: String!
    $topic: String!
  ) {
    addMeetup(
      start_time: $start_time
      end_time: $end_time
      date: $date
      topic: $topic
    ) {
      topic
    }
  }
`;

export { meetups, createMeetup };
