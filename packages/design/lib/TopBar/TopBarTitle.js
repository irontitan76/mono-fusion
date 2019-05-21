import React from 'react';

import { makeStyles } from '@material-ui/styles';

import TopBarLink from './TopBarLink';
import TopBarLogo from './TopBarLogo';
import TopBarName from './TopBarName';
import TopBarVersion from './TopBarVersion';

const useStyles = makeStyles(({ spacing }) => {
  return {
    innerContainer: {
      alignItems: 'baseline',
      display: 'flex',
    },
    outerContainer: {
      alignItems: 'center',
      display: 'flex',
    },
  };
});

export default function TopBarTitle({ LinkComponent }) {
  const classes = useStyles();

  return (
    <TopBarLink LinkComponent={LinkComponent}>
      <div className={classes.outerContainer}>
        <TopBarLogo />
        <div className={classes.innerContainer}>
          <TopBarName />
          <TopBarVersion />
        </div>
      </div>
    </TopBarLink>
  );
}
