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
const EventType = require("./eventSchema.js").EventType;
const SpeakerModel = require("../models/speaker.js");

const speakerFields = {
  id: { type: GraphQLID },
  name: { type: GraphQLString },
  title: { type: GraphQLString },
  bio: { type: GraphQLString },
  events: { type: GraphQLList(EventType) }
};

// => Types
const SpeakerType = new GraphQLObjectType({
  name: "Speaker",
  fields: () => speakerFields
});

const queryFields = {
  speaker: {
    type: SpeakerType,
    args: {
      id: speakerFields.id
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

const mutationFields = {
  addSpeaker: {
    type: SpeakerType,
    args: speakerFields,
    resolve(parent, args) {
      return SpeakerModel.createSpeaker(args);
    }
  }
};

module.exports = {
  queryFields,
  mutationFields
};
