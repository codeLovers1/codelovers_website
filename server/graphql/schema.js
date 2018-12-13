const graphql = require("graphql");
const { GraphQLObjectType, GraphQLSchema } = graphql;

// => Schemas
const meetupSchema = require("./meetupSchema.js");
const eventSchema = require("./eventSchema.js");
const speakerSchema = require("./SpeakerSchema.js");

// => Queries and Mutations
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...meetupSchema.queryFields,
    ...eventSchema.queryFields,
    ...speakerSchema.queryFields
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    ...meetupSchema.mutationFields,
    ...eventSchema.mutationFields
    // ...speakerSchema.mutationFields
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
