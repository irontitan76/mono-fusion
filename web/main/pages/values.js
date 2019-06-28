import React, { useContext, useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    green: {
      color: palette.secondary.main,
    },
    phrase: {
      color: '#212121',
      fontWeight: 300,
      lineHeight: 1.32,
      padding: spacing(7),
    },
    red: {
      color: palette.error.main,
    },
    root: {
      backgroundImage: 'url(./static/images/people-3.jpg)',
      backgroundPosition: 'center center',
      backgroundSize: '100% 150%',
      filter: 'grayscale(20%)',
      height: 500,
      marginBottom: spacing(3),
    },
    yellow: {
      color: '#ffff00',
    },
  };
});

export function Values({ query }) {
  const manifest = useContext(ManifestContext);
  const { pages: { values } } = manifest;
  const classes = useStyles();

  useEffect(() => {
    if (document && document.getElementById(query.name)) {
      const element = document.getElementById(query.name);
      element.scrollIntoView(true);
      window.scrollBy(0, -75);
    }
  });

  const Container = ({ children, id, subtitle, title }) => {
    return (
      <Grid
        container
        id={id}
        justify="center"
        style={{ height: 500 }}
      >
        <Grid item xs={12}>
          <Typography
            align="center"
            variant="h4"
          >
            {title}
          </Typography>
          <Typography
            align="center"
            style={{ fontWeight: 300 }}
            variant="subtitle1"
          >
            {subtitle}
          </Typography>
          {children}
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid
        alignItems="center"
        className={classes.root}
        container
        justify="flex-start"
      >
        <Grid item md={5} xs={12}>
          <Typography
            align="left"
            component='h1'
            className={classes.phrase}
            variant="h3"
          >
            Values reflect what is important to the way you live and work.
          </Typography>
        </Grid>
      </Grid>
      {values.sections.map((value) => (
        <Container
          id={value.id}
          key={value.id}
          subtitle={value.subtitle}
          title={value.title}
        />
      ))}
    </>
  );
}

Values.getInitialProps = ({ query }) => {
  return { query };
};

export default Values;
