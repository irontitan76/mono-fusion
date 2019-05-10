import React, { useEffect } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    green: {
      color: palette.secondary.main,
    },
    phrase: {
      color: '#111',
      fontWeight: 300,
      lineHeight: 1.32,
      padding: spacing(7),
    },
    red: {
      color: palette.error.main,
    },
    root: {
      backgroundImage: 'url(/static/images/people-3.jpg)',
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

function Values({ query }) {
  const classes = useStyles();

  useEffect(() => {
    if(document && document.getElementById(query.name)) {
      const element = document.getElementById(query.name);
      element.scrollIntoView(true);
      window.scrollBy(0, -75);
    }
  });

  const values = [
    {
      id: 'innovators-at-heart',
      subtitle: 'True innovators care not about fame, power, or glory, but humanity.',
      title: 'Innovators at Heart'
    },
    {
      id: 'bias-for-righteous-action',
      subtitle: 'Spend time executing, encouraging, learning, and improving.',
      title: 'Bias for Righteous Action'
    },
    {
      id: 'challenge-respectfully',
      subtitle: 'Challenge ideas so that better ones are borne from them.',
      title: 'Challenge Respectfully'
    },
    {
      id: 'be-compassionate',
      subtitle: 'Compassion is what brings people together, inspires people to win, and propels humanity forward.',
      title: 'Be Compassionate'
    },
    {
      id: 'collaborate-effectively',
      subtitle: 'We put our heart into everything we do who value kindness, creativeness, and intelligence.',
      title: 'Collaborate Effectively'
    },
  ];

  const Container = ({ children, id, subtitle, title }) => {
    return (
      <Grid container id={id} justify='center' style={{ height: 500 }}>
        <Grid item xs={12}>
          <Typography
            align='center'
            variant='h4'
          >
            {title}
          </Typography>
          <Typography
            align='center'
            style={{ fontWeight: 300 }}
            variant='subtitle1'
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
        alignItems='center'
        className={classes.root}
        container
        justify='flex-start'
      >
        <Grid item md={5} xs={12}>
          <Typography
            align='left'
            className={classes.phrase}
            variant='h2'
          >
            Values reflect what is important to the way you live and work.
          </Typography>
        </Grid>
      </Grid>
      {
        values.map((value) => (
          <Container
            id={value.id}
            key={value.id}
            subtitle={value.subtitle}
            title={value.title}
          />
        ))
      }
    </>
  );
};

Values.getInitialProps = ({ query }) => {
  return { query }
};

export default Values;