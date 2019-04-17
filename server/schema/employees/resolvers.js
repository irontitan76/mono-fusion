import * as admin from 'firebase-admin';

export default {
  Query: {
    async employee(_, args) {
      const employee = await admin.firestore().collection('employees').where('id', '==', args.id).get();
      return employee.docs[0].data(); 
    },
    async employees(_, args) {
      const employees = await admin.firestore().collection('employees').get(args);
      return employees.docs.map((employee) => employee.data());
    },
  }
};