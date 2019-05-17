import React from 'react';
import { Query } from 'react-apollo';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import PoliciesApi from '@fusion/api/policies';
import Markdown from '@fusion/design/Markdown';

function Policy({ query }) {
  return (
    <Query query={PoliciesApi.getOne} variables={{ id: query.id }}>
      {({ loading, error, data: { Policy, _policyMeta }, fetchMore }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        return (
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <Markdown content={Policy.content} />
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
