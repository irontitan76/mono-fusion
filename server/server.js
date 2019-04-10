import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { resolvers, typeDefs } from './services/example';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Fusion Server');
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server's ready on PORT ${PORT}`);
});