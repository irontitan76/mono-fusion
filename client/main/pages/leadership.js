import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import employeesApi from '@fusion/api/employees';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    bio: {
      backgroundColor: 'rgb(250,251,252)',
      paddingLeft: 0,
      paddingRight: 0,
    },
    name: {
      fontSize: 14,
      fontWeight: 600,
    },
    position: {
      fontSize: 14,
    },
    profile: {
      height: 125,
    },
    quote: {
      borderBottom: `2px solid ${palette.primary.main}`,
      borderTop: `2px solid ${palette.primary.main}`,
      fontSize: 14,
      fontWeight: 300,
      marginTop: spacing(4),
      paddingBottom: spacing(2),
      paddingLeft: spacing(1),
      paddingRight: spacing(1),
      paddingTop: spacing(2),
      textAlign: 'center',
    },
    root: {
      paddingTop: spacing(3),
    },
  };
});

function Leadership() {
  const classes = useStyles();
  const [execs, setExecs] = useState([]);

  useEffect(() => {
    if (execs.length === 0 ) {
      employeesApi.getAll().then((result) => {
        setExecs(result.data.data.employees);
      });
    }

    return () => console.log('unmounted');
  });

  // const execs = [
  //   {
  //     name: 'Ross Sheppard',
  //     position: 'Chief Executive Officer',
  //     media: {
  //       source: '/static/images/profile-1.jpg',
  //       type: 'image',
  //     },
  //   },
  // ];

  const Profile = ({ person }) => {
    return (
      <Grid
        item
        md={2}
        xs={12}
      >
        <Card elevation={0}>
          <CardMedia
            className={classes.profile}
            image={person.profile.media.source}
          />
          <CardContent className={classes.bio}>
            <Typography className={classes.name}>{`${person.name.preferred} ${person.name.last}`}</Typography>
            <Typography className={classes.position}>{person.profile.title}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  
  return (
    <Grid alignItems='center' className={classes.root} container justify='center'>
      <div style={{ width: '60%'}}>
        <Grid container spacing={4}>
        <Grid item xs={12}>
            <Typography align='center' variant='h4'>From the Office of the CEO</Typography>
            <Typography className={classes.quote}>
              I always like to think that companies are not actually structured in the way that many people 
              portray them &mdash; a pyramid with the executives at the top. Conversely, I believe that companies are
              really structured as an inverted pyramid where company leaders serve its employees. <b>&mdash; <i>Ross Sheppard</i></b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h5'>Executive Profiles</Typography>
          </Grid>
          {
            execs.map((exec) => {
              return <Profile person={exec} />;
            })
          }
        </Grid>
      </div>
    </Grid>
  );
};

export default Leadership;