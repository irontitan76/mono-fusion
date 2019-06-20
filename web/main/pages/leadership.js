import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, CardMedia, Grid, LinearProgress, Typography } from '@material-ui/core';

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
      fontSize: `14px !important`,
      fontWeight: 300,
      marginTop: `${spacing(4)}px !important`,
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

const GET_LEADERSHIP = gql`
  query {
    persons(where: { type: ADMINISTRATOR }) {
      _id
      name {
        first
        last
        preferred
      }
      profile {
        avatar
      }
    }
  }
`;

function Leadership() {
  const classes = useStyles();

  const Profile = ({ person }) => {
    return (
      <Grid item md={2} xs={12}>
        <Card elevation={0}>
          <CardMedia
            className={classes.profile}
            image={person.profile && person.profile.avatar}
          />
          <CardContent className={classes.bio}>
            <Typography className={classes.name}>
              {person.name.preferred || person.name.first} {person.name.last}
            </Typography>
            <Typography className={classes.position}>
              {person.job && person.job.title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const Header = () => (
    <Grid item xs={12}>
      <Typography align="center" variant="h4">
        From the Office of the CEO
      </Typography>
      <Typography className={classes.quote}>
        I always like to think that companies are not actually structured in the way
        that many people portray them &mdash; a pyramid with the executives at the
        top. Conversely, I believe that companies are really structured as an
        inverted pyramid where company leaders serve its employees.{' '}
        <b>
          &mdash; <i>Ross Sheppard</i>
        </b>
      </Typography>
    </Grid>
  );

  const Profiles = ({ employees }) => (
    <>
      <Grid item xs={12}>
        <Typography variant="h5">Executive Profiles</Typography>
      </Grid>
      {employees.map((exec) => {
        return <Profile key={exec.name} person={exec} />;
      })}
    </>
  );

  return (
    <Query query={GET_LEADERSHIP} variables={{ level: 1 }}>
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />;
        if (error) return null;

        return (
          <Grid
            alignItems="center"
            className={classes.root}
            container
            justify="center"
          >
            <Grid item xs={7}>
              <Grid container spacing={4}>
                <Header />
                <Profiles employees={data.persons} />
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </Query>
  );
}

export default Leadership;
