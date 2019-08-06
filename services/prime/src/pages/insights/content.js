import React from 'react';
import { Query } from 'react-apollo';
import { default as f } from 'lodash.filter';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Error, InsightItem, Loading } from '@fusion/visual';

import NoResults from './noResults';

const useStyles = makeStyles(({ spacing }) => {
  return {
    banner: {
      margin: spacing(3),
    },
    container: {
      marginBottom: spacing(3),
      marginTop: spacing(3),
    },
  };
});

export function InsightsContent({ filter, query }) {
  const classes = useStyles();

  const Container = ({ children }) => (
    <Grid
      alignItems="center"
      className={classes.container}
      container
      justify="center"
      spacing={5}
    >
      {children}
    </Grid>
  );

  return (
    <Query query={query}>
      {({ loading, error, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <Loading />;
        
        const docs = f(data.documents, filter);
        
        if (docs.length === 0) return <NoResults />;
        const items = docs.map((document) => {

          const item = (
            <InsightItem
              insight={document}
              key={document._id}
            />
          );
          
          return item;
        });

        return (
          <Container>
            {items}
          </Container>
        );
      }}
    </Query>
  );
}

export default InsightsContent;