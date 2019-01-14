const graphql = require("graphql");
const {
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLObjectType
} = graphql;

const EventModel = require("../models/event.js");
const { EventType, EventInput, SpeakerType } = require("./types.js");

// => Queries
const queryFields = {
  event: {
    type: EventType,
    args: {
      id: { type: GraphQLID }
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

// => Mutations
const mutationFields = {
  addEvent: {
    type: EventType,
    args: {
      input: {
        type: new GraphQLNonNull(EventInput)
      }
    },
    resolve(parent, args) {
      return EventModel.createEvent(args.input);
    }
  },
  addEventSpeakers: {
    type: EventType,
    args: {
      eventId: { type: GraphQLID },
      speakers: { type: new GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      const event = EventModel.addEventSpeakers(args.eventId, args.speakers);
      return event.then(result => result);
    }
  }
};

module.exports = {
  EventType,
  queryFields,
  mutationFields
};
