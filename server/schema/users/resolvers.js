import * as admin from 'firebase-admin';

const serviceAccount = require('../../config/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default {
  Query: {
    async users() {
      const users = await admin.firestore().collection('users').get();
      return users.docs.map((user) => user.data());
    },
  }
}