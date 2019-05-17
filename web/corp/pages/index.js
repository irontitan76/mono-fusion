import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => {
  return {};
});

export function Home() {
  const classes = useStyles();

  return <div>Everything we do as a company is housed in this portal</div>;
}

export default Home;
