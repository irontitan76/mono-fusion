import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    header: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.grey[200]}`,
      padding: spacing(3),
    }
  };
});

function Locations(props) {
  const classes = useStyles();

  return <Grid container justify='center'>
    <Grid className={classes.header} item xs={12}>
      <Typography variant='h4'>Our Offices</Typography> 
    </Grid>
    <Grid item xs={12}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.2514772401255!2d-97.72730978481174!3d30.400606208614157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cc71ec3d3b05%3A0x77c4a76c643f0420!2sThe+Domain!5e0!3m2!1sen!2sus!4v1555514963946!5m2!1sen!2sus" 
        width="100%" 
        height="500" 
        frameborder="0" 
        style={{ border:0 }}
        allowfullscreen>
      </iframe>
    </Grid>
    
  </Grid>;
};

Locations.defaultProps = {
  center: {
    lat: 30.400888,
    lng: -97.725078
  },
  zoom: 14
};

export default Locations;