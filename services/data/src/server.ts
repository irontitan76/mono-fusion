import * as path from 'path';
import express = require('express');
import * as cors from 'cors';

import { ApolloServer } from 'apollo-server-express';
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma';
import { prisma } from '../prisma/generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';

const graphqlPath: string  = '/api/graphql';

const app: express.Application = express();
app.use(cors());

const prime = path.join(__dirname, '..', '..', 'web', 'prime', 'build');
app.use(express.static(prime));
// app.get('/*',  function(req, res) {
//   res.sendFile(path.join(prime, 'index.html'));
// });

const queryFields: string[] = [
  'comment',
  'comments',
  'document',
  'documents',
  'notification',
  'notifications',
  'order',
  'orders',
  'person',
  'persons',
  'product',
  'products',
];

// Expose the full "Query" building block
const Query = prismaObjectType({
  name: 'Query',
  definition: t => t.prismaFields(queryFields),
});

// Customize the "Mutation" building block
const Mutation = prismaObjectType({ 
  name: 'Mutation',
  definition(t) {
    // Expose only the `createTodo` mutation (`updateTodo` and `deleteTodo` not exposed)
    t.prismaFields([
      'createComment',
      'createDocument',
      'createNotification',
      'createOrder',
      'createPerson',
      'createProduct',

      'updateComment',
      'updateDocument',
      'updateNotification',
      'updateOrder',
      'updatePerson',
      'updateProduct',

      'deleteComment',
      'deleteDocument',
      'deleteNotification',
      'deleteOrder',
      'deletePerson',
      'deleteProduct',
    ]);

    // Add any custom mutations here
  }
});

const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: [Query, Mutation],

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
})

const server = new ApolloServer({
    schema,
    context: { prisma },
}) as any;

server.applyMiddleware({
  app,
  path: graphqlPath,
});

const PORT: number = parseInt(process.env.MONGO_DB_PORT) || 4100;
app.listen({ port: PORT }, () => {
  console.log(`[ FUSION ] Data service launched on port ${PORT}! 🚀`);
});