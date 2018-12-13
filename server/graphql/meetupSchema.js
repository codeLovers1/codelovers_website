const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;

const MeetupModel = require("../models/meetup.js");

const meetupFields = {
  id: { type: GraphQLID },
  start_time: { type: GraphQLString },
  end_time: { type: GraphQLString },
  date: { type: new GraphQLNonNull(GraphQLString) },
  topic: { type: new GraphQLNonNull(GraphQLString) }
};

// => Types
const MeetUpType = new GraphQLObjectType({
  name: "Meetup",
  fields: () => meetupFields
});

const queryFields = {
  meetup: {
    type: MeetUpType,
    args: {
      id: meetupFields.id
    },
    resolve(parent, args) {
      return MeetupModel.getMeetup(args.id);
    }
  },
  meetups: {
    type: new GraphQLList(MeetUpType),
    args: {
      limit: {
        type: GraphQLInt
      }
    },
    resolve(parent, args) {
      return MeetupModel.getMeetups(args.limit);
    }
  }
};

const mutationFields = {
  addMeetup: {
    type: MeetUpType,
    args: meetupFields,
    resolve(parent, args) {
      return MeetupModel.createMeetup(args);
    }
  }
};

module.exports = {
  queryFields,
  mutationFields
};
