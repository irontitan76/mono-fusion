import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Tab, Tabs } from '@material-ui/core';

import FullWidth from 'components/FullWidth';

const useStyles = makeStyles(({ palette }) => {
  return {
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
  const [selected, setSelected] = useState(0);

  return (
    <FullWidth className={classes.tabs}>
      <Tabs
        centered
        onChange={(_, tab) => setSelected(tab)}
        value={selected}
      >
        {
          items.map((item) => {
            return <Tab className={classes.tab} label={item.name} />;
          })
        }
      </Tabs>
    </FullWidth>
  );
}

export default Selector;