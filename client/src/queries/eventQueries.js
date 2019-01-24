import { gql } from "apollo-boost";

const events = gql`
  {
    events {
      id
      start_time
      end_time
      date
      topic
    }
  }
`;

const event = gql`
  {
    event {
      id
      start_time
      end_time
      date
      topic
    }
  }
`;

export { events, event };
