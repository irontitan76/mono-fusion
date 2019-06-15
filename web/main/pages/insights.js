import React, { useState } from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import NewsSlider from '@fusion/design/lib/NewsSlider';
import Search from '@fusion/design/lib/Search';

const GET_INSIGHTS = gql`
  query {
    documents(where: { type: INSIGHT }) {
      _id
        description
        media
        meta {
          featured
        }
        title
    }
  }
`;

function Insights() {
  const [search, setSearch] = useState('');
  const [value, setValue] = useState('');
  
  const content = (
    <Query query={GET_INSIGHTS} variables={{ value: search }}>
      {({ loading, error, data: { documents } }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        if (documents.length === 0) {
          return (
            <Typography
              align="center"
              style={{ color: 'grey', paddingTop: 50 }}
            >
              No insights found
            </Typography>
          );
        }

        return (
          <div style={{ paddingTop: 50 }}>
            <NewsSlider
              component={Link}
              insights={documents}
              mediaHeight={150}
              size={{ md: 3 }}
            />
          </div>
        );
      }}
    </Query>
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
