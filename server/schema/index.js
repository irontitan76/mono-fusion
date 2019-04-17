import { gql, makeExecutableSchema } from 'apollo-server-express';
import merge from 'lodash.merge';

import { 
  typeDef as Employee,
  resolvers as employeeResolvers,
} from './employees';

import { 
  typeDef as Insight,
  resolvers as insightResolvers,
} from './insights';

import { 
  typeDef as Policy,
  resolvers as policyResolvers,
} from './policies';

const Query = gql`
  type Query {
    _empty: String
  }

  type Date {
    _nanoseconds: Int
    _seconds: Int
  }

  enum MediaType {
    image
    video
  }

  type Media {
    height: Int
    source: String!
    type: MediaType!
  }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [Query, Employee, Insight, Policy],
  resolvers: merge(resolvers, employeeResolvers, insightResolvers, policyResolvers),
});