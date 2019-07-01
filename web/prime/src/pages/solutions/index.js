import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Tabs, Tab, Toolbar } from '@material-ui/core';

import Agile from './agile';
import Cloud from './cloud';
import Mobile from './mobile';
import Layout from '../../components/Layout';

const useStyles = makeStyles(({ palette, spacing }) => {
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

export function Solutions() {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const tabTitles = ['Data', 'Experience', 'Mobile', 'Process', 'Operation', 'Web'];
  const tabContent = {
    0: function() { return 'Data'; },
    1: function() { return 'Experience'; },
    2: function() { return <Mobile />; },
    3: function() { return <Agile />; },
    4: function() { return <Cloud />; },
    5: function() { return 'Web'; },
  };

  const tabs = tabTitles.map((item) => {
    return <Tab className={classes.tab} key={item} label={item} />;
  });

  return (
    <Layout>
      <AppBar className={classes.appBar}>
        <Tabs
          centered
          className={classes.tabs}
          onChange={(event, tab) => setTab(tab)}
          value={tab}
        >
          {tabs}
        </Tabs>
      </AppBar>
      <Toolbar variant='dense' />
      {tabContent[tab]()}
    </Layout>
  );
}

export default Solutions;