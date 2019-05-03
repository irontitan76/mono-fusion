import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {
    a: {
      textDecoration: 'none',
    },
    link: {
      textDecoration: 'none',
    },
  };
});

export default function TopBarLink({ children, LinkComponent }) {
  const classes = useStyles();

  return (
    <LinkComponent href='/'>
      <a className={classes.a}>
        {children}
      </a>
    </LinkComponent>
  ); 
};

TopBarLink.defaultProps = {
  LinkComponent: 'a',
};