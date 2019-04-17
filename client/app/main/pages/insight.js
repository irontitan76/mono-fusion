import React, { useEffect, useState } from 'react';

import insightsApi from '@fusion/api/insights';
import Article from '@fusion/design/Article';

function Insight({ query }) {
  const [insight, setInsight] = useState({});

  useEffect(() => {
    if (Object.keys(insight).length === 0) {
      insightsApi.getOne(query).then((result) => {
        setInsight(result.data.data.insight);
      });
    }

    // return setInsight({});
  });

  return <>
    <Article article={insight} />
  </>;
};

Insight.getInitialProps = ({ query }) => {
  return { query }
};

export default Insight;