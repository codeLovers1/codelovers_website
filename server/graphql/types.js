const graphql = require("graphql");
const {
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType
} = graphql;

const EventModel = require("../models/event.js");
const SpeakerModel = require("../models/speaker.js");

// => Fields

// => Event

const eventFields = () => ({
  id: { type: GraphQLID },
  start_time: { type: GraphQLString },
  end_time: { type: GraphQLString },
  date: { type: GraphQLString },
  topic: { type: GraphQLString },
  description: { type: GraphQLString },
  speakers: {
    type: new GraphQLList(SpeakerType),
    resolve(parent, args) {
      return SpeakerModel.getSpecificSpeakers(parent.speakers);
    }
  }
});

const eventInputFields = {
  start_time: { type: GraphQLString },
  end_time: { type: GraphQLString },
  date: { type: GraphQLString },
  topic: { type: GraphQLString },
  description: { type: GraphQLString }
};

// => Speaker

const speakerFields = () => ({
  id: { type: GraphQLID },
  name: { type: GraphQLString },
  title: { type: GraphQLString },
  bio: { type: GraphQLString },
  events: {
    type: new GraphQLList(EventType),
    resolve(parent, args) {
      return EventModel.getSpecificEvents(parent.events);
    }
  }
});

const speakerInputFields = {
  name: { type: GraphQLString },
  title: { type: GraphQLString },
  bio: { type: GraphQLString }
};

// => Types

// => Event
const EventType = new GraphQLObjectType({
  name: "Event",
  fields: eventFields
});

const EventInput = new GraphQLInputObjectType({
  name: "EventInputType",
  fields: eventInputFields
});

// => Speaker
const SpeakerType = new GraphQLObjectType({
  name: "Speaker",
  fields: speakerFields
});

const SpeakerInput = new GraphQLInputObjectType({
  name: "SpeakerInputType",
  fields: speakerInputFields
});

module.exports = {
  EventType,
  EventInput,
  SpeakerType,
  SpeakerInput
};
