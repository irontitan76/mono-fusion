const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers/root');

const typeDefs = importSchema('./schema/root.graphql');

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new GraphQLServer({
  context: { prisma },
  schema,
});

server.start(() => console.log('Server is running on http://localhost:4000'));