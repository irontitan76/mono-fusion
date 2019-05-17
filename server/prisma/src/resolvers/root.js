export default {
  Query: {
    insightsByCategory(root, args, context) {
      return context.prisma.posts({ where: { category: 'corporate' } });
    },
  },
  Mutation: {
    createUser(root, args, context) {
      return context.prisma.createUser({ name: args.name });
    },
  },
};
