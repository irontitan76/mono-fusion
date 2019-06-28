import React, { useState } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { default as f } from 'lodash.filter';
import pickBy from 'lodash.pickby';

import { makeStyles } from '@material-ui/styles';
import { Button, CircularProgress, Grid, Typography } from '@material-ui/core';

import Layout from '../components/Layout';
import InsightBar from '../components/InsightBar';
import InsightItem from '../components/InsightItem';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      marginTop: spacing(3),
    },
    noResults: {
      color: palette.grey[500],
      marginBottom: spacing(2),
    },
  };
});

const GET_INSIGHTS = gql`
  query {
    documents(where: { type: INSIGHT }) {
      _id
      author {
        name {
          first
          last
          preferred
        }
        profile {
          avatar
        }
      }
      description
      media
      meta {
        featured
      }
      subtitle
      title
      type
    }
  }
`;

export function Insights() {
  const classes = useStyles();
  const [filter, setFilter] = useState({});

  const cleanedFilter = pickBy(filter, (o) => typeof o !== 'undefined');

  const noResults = (
    <Grid style={{ textAlign: 'center' }} item xs={12}>
      <Typography
        align='center'
        className={classes.noResults}
      >
        No results found
      </Typography>
      { 
        Object.keys(cleanedFilter).length > 0
          ? (
            <Button
              color='primary'
              onClick={() => setFilter({})}
              variant='outlined'
            >
              Clear filters
            </Button>
          ) : null
      }
    </Grid>
  );

  const content = (
    <Query query={GET_INSIGHTS}>
      {({ loading, error, data }) => {
        if (error) return null;
        if (loading) return <CircularProgress />;
        
        const docs = f(data.documents, cleanedFilter);
        
        if (docs.length === 0) return noResults;

        return docs.map((document) => (
          <InsightItem
            insight={document}
            key={document._id}
          />)
        );
      }}
    </Query>
  );
  
  return (
    <Layout>
      <InsightBar filter={filter} setFilter={setFilter} />
      <Grid
        alignItems="center"
        className={classes.container}
        container
        justify="center"
        spacing={5}
      >
        {content}
      </Grid>
    </Layout>
  );
}

export default Insights;