import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Grid from '@material-ui/core/Grid';
import { LinearProgress } from '@material-ui/core';
import Markdown from '@fusion/design/lib/Markdown';

const GET_POLICY = gql`
  query getPolicy($id: ID!) {
    document(where: { _id: $id }) {
      _id
      title
      content
    }
  }
`;

export function Policy({ query }) {
  return (
    <Query query={GET_POLICY} variables={{ id: query.id }}>
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        return (
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <Markdown content={data.document.content} />
            </Grid>
          </Grid>
        );
      }}
    </Query>
  );
}

Policy.getInitialProps = ({ query }) => {
  return { query };
};

export default Policy;
