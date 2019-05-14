import path from 'path';
import { GraphQLServer } from 'graphql-yoga';
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';
import { prisma } from '../generated/prisma-client';
import datamodelInfo from '../generated/nexus-prisma';
// import { idArg } from 'nexus';
// import { importSchema } from 'graphql-import';
// import { makeExecutableSchema } from 'graphql-tools';

const Query = prismaObjectType({ 
  name: 'Query',
  definition: t => t.prismaFields(['*'])
});

const Mutation = prismaObjectType({ 
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*']);
    // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
    // t.prismaFields(['createTodo'])

    // Add a custom `markAsDone` mutation
    // t.field('markAsDone', {
    //   type: 'Todo',
    //   args: { id: idArg() },
    //   nullable: true,
    //   resolve: (_, { id }, ctx) => {
    //     return ctx.prisma.updateTodo({
    //       where: { id },
    //       data: { done: true }
    //     })
    //   }
    // })
  }
});

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    client: prisma,
    datamodelInfo
  },

  outputs: {
    schema: path.resolve(__dirname, '../generated/schema.graphql'),
  }
});

// const resolvers = require('./resolvers/root');
// const typeDefs = importSchema('./schema/root.graphql');
// const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new GraphQLServer({
  context: { prisma },
  schema,
});

server.start(() => console.log('Server is running on http://localhost:4000'));