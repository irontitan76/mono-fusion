import React from 'react';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import { Layout } from '@fusion/visual';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      left: '50%',
      marginBottom: spacing(5),
      marginLeft: '-50vw',
      position: 'relative',
      width: '100vw',
    },
    desc: {
      fontSize: 14,
    },
    header: {
      color: palette.primary.main,
      paddingBottom: 0,
    },
    heading: {
      backgroundColor: palette.background.default,
      borderBottom: `1px solid ${palette.grey[200]}`,
      boxShadow: '0 2px 5px rgba(0,0,0,.4)',
      padding: spacing(3),
      zIndex: 2,
    },
    image: {
      height: 150,
    },
  };
});

const LOCATIONS = [
  {
    description: `Situated in the heart of Texas' capital,
      Fusion Industries has established itself as
      a premier technology company`,
    image: 'http://localhost:3003/api/media/office-1.jpg',
    title: 'Austin, TX',
  },
];

export function Locations() {
  const classes = useStyles();

  const Map = () => {
    return (
      <>
        <Helmet title="Leadership" />
        <Grid className={classes.container} container>
          <Grid className={classes.heading} item xs={12}>
            <Typography component='h1' variant='h5'>Our Office</Typography>
          </Grid>
          <Grid item xs={12}>
            <iframe
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.2514772401255!2d-97.72730978481174!3d30.400606208614157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc71ec3d3b05%3A0x77c4a76c643f0420!2sThe+Domain!5e0!3m2!1sen!2sus!4v1555514963946!5m2!1sen!2sus"
              width="100%"
              height="500"
              frameBorder="0"
              style={{ border: 0 }}
              title='Fusion Locations'
            />
          </Grid>
        </Grid>
      </>
    );
  }

  const Items = () => {
    return LOCATIONS.map((location) => {
      return (
        <Grid item key={location.title} md={3} xs={12}>
          <Card>
            <CardMedia
              className={classes.image}
              image={location.image}
            />
            <CardHeader
              className={classes.header}
              title={location.title}
            />
            <CardContent>
              <Typography className={classes.desc}>
                {location.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      )
    });
  }

  return (
    <Layout>
      <Map />
      <Grid container justify='center' spacing={4}>
        <Items />
      </Grid>
    </Layout>
  );
}

export default Locations;