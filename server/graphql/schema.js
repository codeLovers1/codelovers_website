const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;
const MeetupModel = require('../models/meetup.js');

const meetupFields = {
  id: { type: GraphQLID },
  start_time: { type: GraphQLString },
  end_time: { type: GraphQLString },
  date: { type: new GraphQLNonNull(GraphQLString) },
  topic: { type: new GraphQLNonNull(GraphQLString) },
  speaker: { type: new GraphQLNonNull(GraphQLString) },
};

// => Types
const MeetUpType = new GraphQLObjectType({
  name: 'Meetup',
  fields: () => (meetupFields)
});

// => Queries and Mutations
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
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
      resolve(parent, args) {
        return MeetupModel.getMeetups();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMeetup: {
      type: MeetUpType,
      args: meetupFields,
      resolve(parent, args) {
        return MeetupModel.createMeetup(args);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
