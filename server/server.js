import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './services/insights';

const PORT = process.env.PORT || 8080;
const app = express();

const server = new ApolloServer({ 
  introspection: true,
  typeDefs, 
  resolvers,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.listen(PORT, () => {
  console.log(`🚀 Server's ready on PORT ${PORT}`);
});