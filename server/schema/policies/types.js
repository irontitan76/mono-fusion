import { gql } from 'apollo-server-express';

export default gql`
  type Policy {
    _createdAt: Date!,
    _modifiedAt: Date!,
    _publishedAt: Date!,
    content: String!
    title: String!
  }

  extend type Query {
    policy(title: String!): Policy
    policies: [Policy]
  }
`;
