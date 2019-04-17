import { gql } from 'apollo-server-express';

export default gql`
  type Name {
    first: String!
    middle: String
    last: String!
    preferred: String
  }

  type Birth {
    address: String
    city: String
    date: Date
    state: String
  }

  type Contact {
    address: String
    city: String
    phone: String
    state: String
  }

  type Profile {
    bio: String!
    media: Media
    title: String!
  }

  type Employee {
    birth: Birth
    contact: Contact
    name: Name
    profile: Profile!
  }

  extend type Query {
    employee(id: String!): Employee
    employees: [Employee]
  }
`;
