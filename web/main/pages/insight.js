import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Grid, LinearProgress } from '@material-ui/core';
import { Markdown } from '@fusion/design/lib/_v2';

const GET_INSIGHT = gql`
  query getInsight($id: ID!) {
    document(where: { _id: $id }) {
      _id
      title
      content
    }
  }
`;

function Insight({ query }) {
  return (
    <>
      <Query query={GET_INSIGHT} variables={{ id: query.id }}>
        {({ loading, error, data }) => {
          if (loading) return <LinearProgress />;
          if (error) return null;

          return (
            <Grid container justify='center'>
              <Grid item md={7} xs={12} style={{ marginTop: 25 }}>
                <Markdown source={data.document && data.document.content} />
              </Grid>
            </Grid>
          );
        }}
      </Query>
    </>
  );
}

Insight.getInitialProps = ({ query }) => {
  return { query };
};

export default Insight;
