import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    noResults: {
      textAlign: 'center',
    },
    noResultsText: {
      color: palette.grey[500],
      marginBottom: spacing(2),
    },
  };
});

export function InsightsNoResults({ filter, setFilter }) {
  const classes = useStyles();

  return (
    <Grid className={classes.noResults} item xs={12}>
      <Typography
        align='center'
        className={classes.noResultsText}
      >
        No results found
      </Typography>
      { 
        Object.keys(filter).length > 0
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
}

export default InsightsNoResults;