import React from 'react';

import { makeStyles } from '@material-ui/styles';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    logo: {
      marginRight: spacing(2),
    },
  };
});

export function TopbarLogo({ children }) {
  const classes = useStyles();

  return (
    <ButtonBase className={classes.logo}>
      {children}
    </ButtonBase>
  );
}

TopbarLogo.defaultProps = {
  children: null,
};

export default TopbarLogo;