import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {
    a: {
      cursor: 'pointer',
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
    <LinkComponent href="/">
      <div className={classes.a}>{children}</div>
    </LinkComponent>
  );
}

TopBarLink.defaultProps = {
  LinkComponent: 'a',
};
