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

const EventModel = require("../models/event.js");

const eventFields = {
  id: { type: GraphQLID },
  start_time: { type: GraphQLString },
  end_time: { type: GraphQLString },
  date: { type: new GraphQLNonNull(GraphQLString) },
  topic: { type: new GraphQLNonNull(GraphQLString) },
  description: { type: GraphQLString }
};

// => Types
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: () => eventFields
});

const queryFields = {
  event: {
    type: EventType,
    args: {
      id: eventFields.id
    },
    resolve(parent, args) {
      return EventModel.getEvent(args.id);
    }
  },
  events: {
    type: new GraphQLList(EventType),
    args: {
      limit: {
        type: GraphQLInt
      }
    },
    resolve(parent, args) {
      return EventModel.getEvents(args.limit);
    }
  }
};

const mutationFields = {
  addEvent: {
    type: EventType,
    args: eventFields,
    resolve(parent, args) {
      return EventModel.createEvent(args);
    }
  }
};

module.exports = {
  EventType,
  queryFields,
  mutationFields
};
