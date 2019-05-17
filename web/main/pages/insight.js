import React from 'react';
import { Query } from 'react-apollo';

import LinearProgress from '@material-ui/core/LinearProgress';

import Article from '@fusion/design/Article';
import InsightsApi from '@fusion/api/insights';

function Insight({ query }) {
  return (
    <>
      <Query query={InsightsApi.getOne} variables={{ id: query.id }}>
        {({ loading, error, data: { Insight, _insightMeta }, fetchMore }) => {
          if (loading) return <LinearProgress />;
          if (error) return null;

          return <Article article={Insight} />;
        }}
      </Query>
    </>
  );
}

Insight.getInitialProps = ({ query }) => {
  return { query };
};

export default Insight;
