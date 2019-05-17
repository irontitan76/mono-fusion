import React, { useState } from 'react';
import { Query } from 'react-apollo';
import Link from 'next/link';

import LinearProgress from '@material-ui/core/LinearProgress';

import Articles from '@fusion/design/Articles';
import PoliciesApi from '@fusion/api/policies';

export function Analytics() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');

  return (
    <Query query={PoliciesApi.getAll} variables={{ value: search }}>
      {({ loading, error, data: { allPolicies, _allPoliciesMeta }, fetchMore }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        return (
          <Articles
            attr="id"
            count={_allPoliciesMeta.count}
            // { name: 'title', label: 'Title', link: { attr: 'id', prefix: 'insight' } }
            headers={['Title', 'Owner', 'Published On', '']}
            LinkComponent={Link}
            rows={allPolicies}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && setSearch(value)}
            placeholder="Search policies..."
            prefix="policy"
            searchValue={value}
            title="Policies"
          />
        );
      }}
    </Query>
  );
}

export default Analytics;
