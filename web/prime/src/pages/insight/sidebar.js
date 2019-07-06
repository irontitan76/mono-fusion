import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';

import Ad from 'components/Ad';
import Author from 'components/Author';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    author: {
      marginBottom: spacing(3),
      padding: spacing(3),
    },
    sidebar: {
      [breakpoints.up('md')]: {
        position: 'sticky',
        top: 136,
      }
    },
  };
});

export function InsightSidebar({ author }) {
  const classes = useStyles();

  return (
    <Grid item md={4}>
      <div className={classes.sidebar}>
        <Paper className={classes.author} elevation={0}>
          <Author
            author={author}
            expand={true}
            size='lg'
          />
        </Paper>
        <Ad />
      </div>
    </Grid>
  );
}

export default InsightSidebar;