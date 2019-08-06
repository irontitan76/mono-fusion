import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Collapse, Divider, Grid, IconButton, Paper, Toolbar, Tooltip, Typography } from '@material-ui/core';

import { Layout } from '@fusion/visual';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    appBar: {
      marginBottom: spacing(3),
      position: 'relative',
      top: spacing(6),
    },
    container: {},
    filterButton: {
      fontSize: 'initial',
    },
    title: {
      '& span:nth-child(1)': {
        fontWeight: 700,
      },
      '& span:nth-child(2)': {
        color: palette.primary.dark,
        fontSize: 20,
        fontWeight: 700,
      },
      flex: 1,
    }
  };
});

const FILTERS = [
  {
    name: 'Organization',
    items: [],
  },
  {
    name: 'Location',
    items: [],
  },
];

export function Careers() {
  const classes = useStyles();
  const [open, setOpen] = useState();

  const bar = (
    <Toolbar>
      <Typography className={classes.title}>
        <span>careers</span>
        <span>.</span>
        <span>engine</span>
      </Typography>
      <Tooltip title='Filter results'>
        <IconButton
          className={classes.filterButton}
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={['fal', 'filter']} />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
  
  const filter = (
    <Collapse in={open}>
      <Divider />
      <Grid container>
        <Paper>
          {FILTERS.map((filter) => {
            return <Typography>{filter.name}</Typography>
          })}
        </Paper>
      </Grid>
    </Collapse>
  )

  return (
    <>
      <Helmet title="Careers" />
      <Layout>
        <AppBar
          className={classes.appBar}
          color='primary.dark'
        >
          {bar}
          {filter}
        </AppBar>
        <Toolbar />
        <Grid
          className={classes.container}
          container
        >
          <Grid item xs={12}>
            <Typography variant='h3'>
              Careers page
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Careers;