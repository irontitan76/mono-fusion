import React, { useState } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';

import LinearProgress from '@material-ui/core/LinearProgress';

import Articles from '@fusion/design/lib/Articles';
import InsightsApi from '@fusion/api/lib/insights';

export function Insights() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  return (
    <Query query={InsightsApi.getAll} variables={{ value: search }}>
      {({ loading, error, data: { allInsights, _allInsightsMeta }, fetchMore }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        return (
          <Articles
            attr="id"
            count={_allInsightsMeta.count}
            headers={['Title', 'Author', 'Published On', '']}
            LinkComponent={Link}
            rows={allInsights}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && setSearch(value)}
            placeholder="Search insights..."
            prefix="insight"
            searchValue={value}
            title="Insights"
          />
        );
      }}
    </Query>
  );
}

export default Insights;
