import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

import Layout from '../../components/Layout';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      backgroundImage: `url(${require('../../static/images/office-1.jpg')})`,
      backgroundPosition: 'center center',
      backgroundSize: '100% 120%',
      filter: 'brightness(75%)',
      height: 500,
      left: '50%',
      margin: 0,
      marginLeft: '-50vw',
      position: 'absolute',
      width: '100vw',
      zIndex: -1,
    },
    content: {
      paddingTop: spacing(20),
    },
    contentContainer: {
      paddingLeft: spacing(7),
      paddingRight: spacing(7),
      width: '100%',
    },
    ceo: {
      backgroundColor: 'black',
      height: 350,
      overflow: 'hidden',
    },
    ceoBio: {
      backgroundColor: 'black',
      height: 350,
    },
    ceoBioContainer: {
      height: '100%',
      paddingLeft: 150,
    },
    ceoImage: {
      '&:hover': {
        filter: 'none',
      },
      filter: 'grayscale(50%)',
      width: '100%',
    },
    ceoName: {
      color: palette.primary.main,
      fontWeight: 600,
      marginBottom: spacing(1),
    },
    ceoPosition: {
      color: 'white',
    },
    leader: {
      '&:first-of-type': {
        borderLeft: `1px solid ${palette.grey[300]}`,
      },
      "& .unfilled": {
        backgroundColor: palette.grey[200],
        borderRight: `1px solid ${palette.grey[300]}`,
        height: 300,
      },
      backgroundColor: 'black',
      cursor: (props) => props.leader && props.leader.unfilled ? 'pointer' : 'auto',
      textDecoration: 'none',
    },
    leaderImage: {
      '&:hover': {
        filter: 'none',
      },
      filter: 'grayscale(100%)',
      height: 300,
      width: '100%',
    },
    leaderName: {
      color: palette.primary.main,
      fontWeight: 700,
      paddingTop: spacing(2),
    },
    leaderTitle: {
      color: 'white',
      height: 50,
    },
    title: {
      color: 'white',
      fontWeight: 700,
      padding: spacing(7, 0),
    },
    unfilledIcon: {
      color: 'grey',
      fontSize: 200,
      textAlign: 'center',
    },
  };
});

const leaders = [
  {
    image: '/images/profile-1.jpg',
    name: 'Ross Sheppard',
    title: 'Founder & CEO',
  },
  {
    unfilled: true,
    title: 'Chief Finance Officer',
  },
  {
    unfilled: true,
    title: 'Chief Legal Officer',
  },
  {
    unfilled: true,
    title: 'Chief Operations Officer',
  },
  {
    unfilled: true,
    title: 'Chief Marketing Officer',
  },
];

export function Ceo({ leader }) {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.ceo} item xs={6}>
        <img
          alt={leader.name}
          className={classes.ceoImage}
          height={400}
          src={leader.image}
        />
      </Grid>
      <Grid className={classes.ceoBio} item xs={6}>
        <Grid
          alignItems='center'
          className={classes.ceoBioContainer}
          container
          justify='center'
        >
          <Grid item xs={12}>
            <Typography
              className={classes.ceoName}
              variant='h3'
            >
              {leader.name}
            </Typography>
            <Typography
              className={classes.ceoPosition}
              variant='subtitle1'
            >
              {leader.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export function Leader(props) {
  const classes = useStyles(props);
  const { leader } = props;
  
  const image = leader.unfilled
    ? (
      <Grid
        alignItems='center'
        className='unfilled'
        container
        justify='center'
      >
        <Grid item>
          <FontAwesomeIcon
            className={classes.unfilledIcon}
            icon={['fal', 'user-tie']}
          />
        </Grid>
      </Grid>
    ) : (
      <img
        alt={leader.name}
        className={classes.leaderImage}
        src={leader.image}
      />
    );

  return (
    <Grid
      className={classes.leader}
      component={leader.unfilled ? Link : undefined}
      item
      md={3}
      to={leader.unfilled ? '/careers' : undefined}
    >
      {image}
      <Typography
        align='center'
        className={classes.leaderName}
        variant='h6'
      >
        {leader.unfilled ? 'Apply for position' : leader.name}
      </Typography>
      <Typography
        align='center'
        className={classes.leaderTitle}
        variant='subtitle1'
      >
        {leader.title}
      </Typography>
    </Grid>
  );
}

export function Leadership() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.container} />
      <div className={classes.content}>
        <Grid className={classes.contentContainer} container>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              variant='h2'
            >
              Leadership
            </Typography>
          </Grid>
          {
            leaders.map((leader, index) => {
              const key = leader.name || index;
              if (index === 0) {
                return <Ceo key={key} leader={leader} />
              }

              return <Leader key={key} leader={leader} />;
            })
          }
        </Grid>
      </div>
    </Layout>
  );
}

export default Leadership;