import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { AppBar, Grid, Tab, Tabs, Toolbar } from '@material-ui/core';

import Layout from '../../components/Layout';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    appBar: {
      backgroundColor: palette.background.paper,
      color: '#313131',
      top: 48,
    },
    container: {
      margin: 'auto',
      padding: `0 ${spacing(3)}px`,
    },
    tab: {
      flexBasis: '16%',
      textTransform: 'none',
    },
  };
});

export function Values() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  const values = [
    {
      name: 'Innovators at heart',
    },
    {
      name: 'Bias for righteous action',
    },
    {
      name: 'Challenge respectfully',
    },
    {
      name: 'Be compassionate',
    },
    {
      name: 'Collaborate effectively',
    },
  ];

  return (
    <Layout>
      <AppBar className={classes.appBar}>
        <Tabs
          centered
          onChange={(event, tab) => setSelected(tab)}
          value={selected}
        >
          {
            values.map((value) => {
              return <Tab className={classes.tab} label={value.name} />;
            })
          }
        </Tabs>
      </AppBar>
      <Toolbar variant='dense' />
      <Grid className={classes.container} container>
        Hello
      </Grid>
    </Layout>
  );
}

export default Values;