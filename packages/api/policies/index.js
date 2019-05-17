const gql = require('graphql-tag');

module.exports = {
  getAllIds: gql`
    query {
      allPolicies {
        id
        title
      }
    }
  `,
  getAll: gql`
    query allPolicies($value: String) {
      allPolicies(filter: { title_contains: $value }) {
        id
        modifiedAt
        publishedAt
        content
        title
      }
      _allPoliciesMeta {
        count
      }
    }
  `,
  getOne: gql`
    query Policy($id: ID!) {
      Policy(id: $id) {
        id
        modifiedAt
        publishedAt
        content
        title
      }
    }
  `,
  updateOne: gql`
    mutation updatePolicy($id: ID!, $content: String!) {
      updatePolicy(id: $id, content: $content) {
        content
        id
      }
    }
  `,
};
