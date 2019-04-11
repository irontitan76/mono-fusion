import * as admin from 'firebase-admin';

const serviceAccount = require('../../config/service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default {
  Query: {
    async insights() {
      const insights = await admin.firestore().collection('insights').get();
      return insights.docs.map((insight) => insight.data());
    },
    async insight() {
      const insight = await admin.firestore().collection('insights').get();
      console.log(insight.data());
      return insight.data();
      
    }
  },
};