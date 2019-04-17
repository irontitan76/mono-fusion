import * as admin from 'firebase-admin';

export default {
  Query: {
    async policy(_, args) {
      const policy = await admin.firestore().collection('policies').where('title', '==', args.title).get();
      return policy.docs[0].data(); 
    },
    async policies(_, args) {
      const policies = await admin.firestore().collection('policies').get(args);
      return policies.docs.map((policy) => policy.data());
    },
  }
};