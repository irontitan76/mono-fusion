import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {
    a: {
      textDecoration: 'none',
    },
  };
});

export default function TopBarLink({ children }) {
  const classes = useStyles();

  return (
    <a className={classes.a} href='/'>
      {children}
    </a>
  ); 
};