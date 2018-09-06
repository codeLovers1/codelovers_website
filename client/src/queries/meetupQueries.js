import { gql } from "apollo-boost";

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

export { meetups };
