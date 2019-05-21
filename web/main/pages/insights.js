import React, { useState } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import InsightsApi from '@fusion/api/lib/insights';
import NewsSlider from '@fusion/design/lib/NewsSlider';
import Search from '@fusion/design/lib/Search';

function Insights() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  const content = (
    <>
      <Query query={InsightsApi.getAll} variables={{ value: search }}>
        {({ loading, error, data: { allInsights } }) => {
          if (loading) return <LinearProgress />;
          if (error) return null;

          let content;

          if (allInsights.length === 0) {
            content = (
              <Typography align="center" style={{ color: 'grey' }}>
                No insights found
              </Typography>
            );
          } else {
            content = (
              <NewsSlider
                component={Link}
                insights={allInsights}
                mediaHeight={150}
                size={{ md: 3 }}
              />
            );
          }

          return (
            <>
              <div style={{ marginBottom: 50 }} />
              {content}
            </>
          );
        }}
      </Query>
    </>
  );

  return (
    <>
      <Search
        component={Link}
        filterIcon={
          <FontAwesomeIcon icon={['fal', 'filter']} style={{ marginRight: 8 }} />
        }
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => event.key === 'Enter' && setSearch(value)}
        searchIcon={
          <FontAwesomeIcon
            icon={['fal', 'search']}
            onClick={() => setSearch(value)}
            style={{ cursor: 'pointer' }}
          />
        }
        searchValue={value}
      />
      {content}
    </>
  );
}

export default Insights;
