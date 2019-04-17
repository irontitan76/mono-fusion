import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as admin from 'firebase-admin';
import schema from './schema';

const serviceAccount = require('./config/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// admin.firestore().collection('insights').doc("").update({
//   content: ``,
// });

const PORT = process.env.PORT || 8080;
const app = express();

const server = new ApolloServer({ 
  introspection: true,
  schema,
});

server.applyMiddleware({ app });

app.get('/', (req, res) => {
  res.redirect('/graphql');
});

app.get('/api', (req, res) => {
  res.send(schema);
});

app.listen(PORT, () => {
  console.log(`🚀 Server's ready on PORT ${PORT}`);
});