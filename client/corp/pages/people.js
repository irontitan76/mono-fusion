import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      backgroundColor: palette.primary.main,
      padding: spacing(5),
      
    },
    icon: {
      color: palette.primary.main,
      fontSize: 14,
    },
    title: {
      fontSize: 18,
      fontWeight: 300,
    },
  };
});

export function People() {
  const classes = useStyles();

  const items = [
    {
      icon: ['fal', 'money-check'],
      path: '/people/payroll',
      title: 'Payroll',
    },
    {
      icon: ['fal', 'calendar-alt'],
      path: '/people/schedule',
      title: 'Schedule',
    },
    {
      icon: ['fal', 'umbrella-beach'],
      path: '/people/benefits',
      title: 'Benefits',
    },
    {
      icon: ['fal', 'user-plus'],
      path: '/people/talent',
      title: 'Talent',
    },
  ];

  const Items = () => items.map((item) => (
    <Grid item md={3} xs={12}>
      <Card>
        <CardHeader
          avatar={<FontAwesomeIcon className={classes.icon} icon={item.icon} />}
          title={item.title}
          titleTypographyProps={{
            className: classes.title,
            component: 'h2',
            variant: 'h6'
          }}
        />
      </Card>
    </Grid>
  ));

  return (
    <Grid className={classes.container} container spacing={3}>
      <Items />
      <Grid item xs={12} style={{ flex: 1 }}>
        <Card>
          <CardHeader title='test' />
        </Card>
      </Grid>
    </Grid>
  );
}

export default People;