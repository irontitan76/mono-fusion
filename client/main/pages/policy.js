import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import policiesApi from '@fusion/api/policies';
import Markdown from '@fusion/design/Markdown';

function Policy({ query }) {
  const [policy, setPolicy] = useState({});

  useEffect(() => {
    if (Object.keys(policy).length === 0) {
      policiesApi.getOne(query).then((result) => {
        setPolicy(result.data.data.policy);
      });
    }

    // return setInsight({});
  });

  if (!policy.content) {
    return <LinearProgress variant='query' />;
  }

  return (
    <Grid container justify='center'>
      <Grid item md={8} xs={12}>
        <Markdown content={policy.content} />
      </Grid>
    </Grid>
  );
};

Policy.getInitialProps = ({ query }) => {
  return { query }
};

export default Policy;