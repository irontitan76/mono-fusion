import React, { useState } from 'react';

import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Tab, Tabs, Typography, useMediaQuery } from '@material-ui/core';
import { FullWidth } from '@fusion/visual';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    subheader: {
      padding: spacing(3),
    },
    tab: {
      flexBasis: '16%',
      textTransform: 'none',
    },
    tabs: {
      borderBottom: `1px solid ${palette.secondary.main}`,
      borderTop: `1px solid ${palette.secondary.main}`,
    },
  };
});

export function Selector({ items }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [selected, setSelected] = useState(0);

  const Item = ({ item }) => (
    <Grid container justify='center'>
      <Typography
        align='center'
        className={classes.subheader}
        component={Grid}
        item
        variant='h5'
      >
        {item.subheader}
      </Typography>
      <Grid item>
        
      </Grid>
    </Grid>
  )

  return (
    <>
      <FullWidth className={classes.tabs}>
        <Tabs
          centered={matches}
          onChange={(_, tab) => setSelected(tab)}
          value={selected}
          variant={matches ? 'fullWidth' : 'scrollable'}
        >
          {
            items.map((item) => {
              return (
                <Tab
                  className={classes.tab}
                  key={item.name}
                  label={item.name}
                  wrapped={false}
                />
              );
            })
          }
        </Tabs>
      </FullWidth>
      <Item item={items[selected]} />
    </>
  );
}

export default Selector;