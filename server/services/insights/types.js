import { gql } from 'apollo-server-express';

export default gql`
  enum MediaType {
    image
    video
  }

  type Date {
    _seconds: Int
    _nanoseconds: Int
  }

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

  type Media {
    height: Int
    source: String!
    type: MediaType!
  }

  type Insight {
    id: ID!
    _publishedAt: Date!
    desc: String!
    media: Media
    meta: MetaType
    slug: String!
    title: String!
  }

  type Query {
    insight: Insight
    insights: [Insight]
  }
`;
