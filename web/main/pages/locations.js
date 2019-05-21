import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    desc: {
      fontSize: 14,
    },
    header: {
      color: palette.primary.main,
      paddingBottom: 0,
    },
    heading: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.grey[200]}`,
      boxShadow: '0 2px 5px rgba(0,0,0,.4)',
      padding: spacing(3),
      zIndex: 2,
    },
    image: {
      height: 150,
    },
    location: {},
    locations: {
      padding: spacing(5),
    },
    map: {},
  };
});

function Locations(props) {
  const classes = useStyles();

  const locations = [
    {
      desc: `Situated in the heart of Texas' capital,
        Fusion Industries has established itself as
        a premier technology company`,
      image: './static/images/office-1.jpg',
      title: 'Austin, TX',
    },
  ];

  const Items = () => {
    return locations.map((location) => (
      <Grid item md={3} xs={12}>
        <Card className={classes.location}>
          <CardMedia className={classes.image} image={location.image} />
          <CardHeader className={classes.header} title={location.title} />
          <CardContent>
            <Typography className={classes.desc}>{location.desc}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ));
  };

  return (
    <Grid container justify="center">
      <Grid className={classes.heading} item xs={12}>
        <Typography variant="h4">Our Offices</Typography>
      </Grid>
      <Grid className={classes.map} item xs={12}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.2514772401255!2d-97.72730978481174!3d30.400606208614157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc71ec3d3b05%3A0x77c4a76c643f0420!2sThe+Domain!5e0!3m2!1sen!2sus!4v1555514963946!5m2!1sen!2sus"
          width="100%"
          height="500"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        />
      </Grid>
      <Grid className={classes.locations} item xs={12}>
        <Grid container justify="center" spacing={4}>
          <Items />
        </Grid>
      </Grid>
    </Grid>
  );
}

Locations.defaultProps = {
  center: {
    lat: 30.400888,
    lng: -97.725078,
  },
  zoom: 14,
};

export default Locations;
