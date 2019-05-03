import { gql } from 'apollo-server-express';

export default gql`
  type SizeType {
    xs: Int
    sm: Int
    md: Int
    lg: Int
    xl: Int
  }

  type MetaType {
    featured: Boolean
    size: SizeType
  }

  type Insight {
    _createdAt: Date!
    _modifiedAt: Date!
    _publishedAt: Date!
    authorId: String!
    category: String!
    content: String!
    desc: String!
    id: ID!
    media: Media
    meta: MetaType
    title: String!
  }

  extend type Query {
    insight(id: String!): Insight
    insights(category: String): [Insight]
  }
`;
