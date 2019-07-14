import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { makeStyles, useTheme } from '@material-ui/styles';
import { AppBar, Tabs, Tab, Toolbar, useMediaQuery } from '@material-ui/core';

import Layout from '../../components/Layout';

import Data from './data';
import Experience from './experience';
import Process from './process';
import Operations from './operations';
import Mobile from './mobile';
import Web from './web';

const useStyles = makeStyles(({ palette }) => {
  return {
    appBar: {
      backgroundColor: palette.background.paper,
      top: 48,
    },
    tab: {
      textTransform: 'none',
    },
    tabs: {
      color: palette.getContrastText(palette.background.paper),
    },
  };
});

const tabTitles = ['Data', 'Experience', 'Mobile', 'Process', 'Operations', 'Web'];
const tabContent = {
  data: <Data />,
  experience: <Experience />,
  mobile: <Mobile />,
  process: <Process />,
  operations: <Operations />,
  web: <Web />,
};

export function Solutions({ location }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  // TODO: improve this location-based tab view
  const [tab, setTab] = useState(location.pathname.split('/solutions/')[1] || 'data');

  const tabs = tabTitles.map((item) => {
    return (
      <Tab
        className={classes.tab}
        component={Link}
        label={item}
        key={item}
        to={`/solutions/${item.toLowerCase()}`}
        value={item.toLowerCase()}
      />
    );
  });

  return (
    <>
      <Helmet title="Solutions" />
      <Layout>
        <AppBar className={classes.appBar}>
          <Tabs
            centered={matches}
            className={classes.tabs}
            onChange={(_, tab) => setTab(tab)}
            scrollButtons='auto'
            value={tab}
            variant={matches ? 'fullWidth' : 'scrollable'}
          >
            {tabs}
          </Tabs>
        </AppBar>
        <Toolbar variant='dense' />
        {tabContent[tab]}
      </Layout>
    </>
  );
}

export default Solutions;