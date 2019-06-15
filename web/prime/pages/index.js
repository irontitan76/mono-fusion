import React from 'react';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette }) => {
  return {
    banner: {
      backgroundColor: palette.primary.light,
      height: 500,
      width: '100%',
    }
  };
});

export function Home() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.banner}></div>
    </>
  );
}

Home.defaultProps = {};
Home.propTypes = {};

export default Home;