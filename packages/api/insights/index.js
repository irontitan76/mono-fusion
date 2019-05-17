const gql = require('graphql-tag');

module.exports = {
  getAll: gql`
    query allInsights($value: String) {
      allInsights(
        filter: { OR: [{ title_contains: $value }, { desc_contains: $value }] }
      ) {
        id
        desc
        media {
          height
          source
        }
        meta {
          featured
          size {
            lg
            md
            sm
            xl
            xs
          }
        }
        publishedAt
        title
      }
      _allInsightsMeta {
        count
      }
    }
  `,
  getByCategory: gql`
    query allInsights($category: String!) {
      allInsights(filter: { category: $category }) {
        id
        category
        desc
        media {
          height
          source
        }
        publishedAt
        title
      }
      _allInsightsMeta {
        count
      }
    }
  `,
  getOne: gql`
    query Insight($id: ID!) {
      Insight(id: $id) {
        id
        authorId
        category
        content
        media {
          source
          type
        }
        publishedAt
        title
      }
    }
  `,
  getOneByName: gql`
    query Insight($name: String!) {
      Insight(name: $name) {
        id
      }
    }
  `,
  updateOne: gql`
    mutation updateInsight($id: ID!, $content: String!) {
      updateInsight(id: $id, content: $content) {
        id
        content
      }
    }
  `,
  updateOneTitle: (title, id, client) => {
    client.mutate({
      mutation: gql`
        mutation updateInsight($id: ID!, $title: String!) {
          updateInsight(id: $id, title: $title) {
            id
            title
          }
        }
      `,
      variables: { id, title },
      optimisticResponse: {
        __typename: 'Mutation',
        updateInsight: {
          __typename: 'Insight',
          id,
          title,
        },
      },
    });
  },
};
