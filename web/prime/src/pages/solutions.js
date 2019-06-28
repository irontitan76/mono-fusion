import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Grid, Tabs, Tab, Toolbar } from '@material-ui/core';

import Layout from '../components/Layout';

const useStyles = makeStyles(({ palette }) => {
  return {
    appBar: {
      backgroundColor: palette.background.paper,
      top: 48,
    
    },
    container: {},
    tab: {
      textTransform: 'none',
    },
    tabs: {
      color: palette.getContrastText(palette.background.paper),
    }
  };
});

export function Solutions() {
  const classes = useStyles();
  const [tab, setTab] = useState();

  return (
    <Layout>
      <AppBar className={classes.appBar}>
        <Tabs centered className={classes.tabs} onChange={(event, tab) => setTab(tab)} value={tab}>
          <Tab className={classes.tab} label='Agile' />
          <Tab className={classes.tab} label='Cloud' />
          <Tab className={classes.tab} label='Data' />
          <Tab className={classes.tab} label='Mobile' />
          <Tab className={classes.tab} label='Web' />
        </Tabs>
      </AppBar>
      <Toolbar variant='dense' />
      {
        tab === 0 ? (
          <Grid className={classes.container} container>
            Solutions
          </Grid>
        ) : null
      }
    </Layout>
  );
}

export default Solutions;