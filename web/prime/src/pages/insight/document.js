import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Paper } from '@material-ui/core';

import Markdown from 'components/Markdown';
import Thread from 'components/Thread';

const useStyles = makeStyles(({ breakpoints, spacing }) => {
  return {
    document: {
      height: 'auto',
      padding: spacing(3, 7),
      [breakpoints.down('sm')]: {
        padding: spacing(3, 2),
      },
    },
  };
});

export function InsightDocument({ media, content }) {
  const classes = useStyles();

  return (
    <Grid item md={8} xs={12}>
      {media ? <img alt='article' height="500" src={media} width="100%" /> : null}
      <Paper className={classes.document} elevation={0}>
        <Markdown source={content} />
      </Paper>
      <Thread />
    </Grid>
  );
}

export default InsightDocument;