const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLSchema
} = graphql;

const SpeakerModel = require("../models/speaker.js");
const { SpeakerType, SpeakerInput, EventType } = require("./types.js");

// => Queries
const queryFields = {
  speaker: {
    type: SpeakerType,
    args: {
      id: { type: GraphQLID }
    },
    resolve(parent, args) {
      return SpeakerModel.getSpeaker(args.id);
    }
  },
  speakers: {
    type: new GraphQLList(SpeakerType),
    args: {
      limit: {
        type: GraphQLInt
      }
    },
    resolve(parent, args) {
      return SpeakerModel.getSpeakers(args.limit);
    }
  }
};

// => Mutations
const mutationFields = {
  addSpeaker: {
    type: SpeakerType,
    args: {
      input: {
        type: new GraphQLNonNull(SpeakerInput)
      }
    },
    resolve(parent, args) {
      return SpeakerModel.createSpeaker(args.input);
    }
  },
  addSpeakerEvents: {
    type: SpeakerType,
    args: {
      speakerId: { type: GraphQLID },
      events: { type: new GraphQLList(GraphQLID) }
    },
    resolve(parent, args) {
      const event = SpeakerModel.addSpeakerEvents(args.speakerId, args.events);
      return event.then(result => result);
    }
  }
};

module.exports = {
  SpeakerType,
  queryFields,
  mutationFields
};
