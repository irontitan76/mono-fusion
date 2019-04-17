import * as admin from 'firebase-admin';

export default {
  Query: {
    async insight(_, args) {
      const insight = await admin.firestore().collection('insights').where('id', '==', args.id).get();
      return insight.docs[0].data(); 
    },
    async insights(_, args) {
      let insights;

      if (args.category) {
        insights = await admin.firestore().collection('insights').where("category", "==", args.category).get();
      } else {
        insights = await admin.firestore().collection('insights').get();
      }

      return insights.docs.map((insight) => insight.data());
    },
  },
};