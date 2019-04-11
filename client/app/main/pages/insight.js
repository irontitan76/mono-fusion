import React from 'react';
import Markdown from 'react-markdown';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import FusionStandard from '@fusion/client/config/md/FusionStandard.md';
import FusionStrategy from '@fusion/client/config/md/FusionStrategy.md';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    markdown: {
      '& a': {
        '&:link': {
          color: palette.text.primary,
        },
        '&:visited': {
          color: palette.text.primary,
        },
        color: palette.text.primary,
        cursor: 'pointer',
        textDecoration: 'underline',
      },
      '& blockquote': {
        '& em': {
          fontWeight: 300,
        },
        '& p': {
          fontWeight: 500,
        },
        borderBottom: `2px solid ${palette.primary.main}`,
        borderTop: `2px solid ${palette.primary.main}`,
        fontSize: 14,
        fontWeight: 500,
        marginBottom: spacing(4),
        marginLeft: 0,
        marginRight: 0,
        marginTop: spacing(4),
      },
      '& h1': {
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
      '& h1 + blockquote': {
        border: 'none',
        '& p': {
          fontWeight: 300,
          margin: 0,
          padding: 0,
        },
      },
      '& h2': {
        fontSize: 36,
        fontWeight: 400,
      },
      '& h3': {},
      '& h4': {},
      '& h5': {},
      '& h6': {},
      '& p': {
        '& strong': {
          fontWeight: 500,
        }
      },
      padding: spacing(3),
    },
  };
});

function Insight({ query }) {
  const classes = useStyles();

  let source = '';
  if (query.id === '0001') {
    source = FusionStandard;
  } else {
    source = FusionStrategy;
  }

  return (
    <Grid container justify='center'>
      <Grid item md={8} xs={12}>
        <Markdown className={classes.markdown} source={source} />
      </Grid>
    </Grid>
  );
};

Insight.getInitialProps = ({ query }) => {
  return { query }
};

export default Insight;