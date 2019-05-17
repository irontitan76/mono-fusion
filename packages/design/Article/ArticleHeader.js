import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    title: {
      fontSize: 48,
      fontWeight: 300,
      marginBottom: 0,
      '&::after': {
        backgroundColor: palette.primary.main,
        content: '" "',
        display: 'block',
        height: 5,
        marginBottom: spacing(3),
        width: 45,
      },
    },
  };
});

function ArticleHeader(props) {
  const classes = useStyles();
  const { author, published, title } = props;

  if (!title) {
    return <LinearProgress variant="query" />;
  }

  return (
    <>
      <Typography className={classes.title} variant="h1">
        {title}
      </Typography>
      <Typography variant="caption">
        <b>Written by:</b> {author}
      </Typography>
      <br />
      <Typography variant="caption">
        <b>Published on:</b> {moment(published).format('MMM DD, YYYY')}
      </Typography>
    </>
  );
}

export default ArticleHeader;
