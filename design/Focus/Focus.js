import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(({ palette }) => {
  return {
    content: {
      backgroundColor: palette.grey[200], 
      borderBottom: '1px solid #ccc',
      borderTop: '1px solid #ccc',
      padding: 20
    },
    header: {
      textAlign: 'center',
    },
    icon: {
      textAlign: 'center',
    },
    item: {
      background: 'none',
    },
    subheader: {
      fontSize: 14,
      fontWeight: 500,
    },
    title: {
      fontSize: 18,
      fontWeight: 300,
    },
  }
});

function Focus({ items }) {
  const classes = useStyles();

  const Icon = ({ icon }) => {

    if (!icon || typeof icon === 'undefined') return null;

    return (
      <div className={classes.icon}>
        {icon}
      </div>
    );
  };

  const FocusItems = () => items.map((item) => (
    <Grid item key={item.title} md={3} xs={12}>
      <Card className={classes.item} elevation={0}>
        <Icon icon={item.icon} />
        <CardHeader
          className={classes.header}
          title={item.title}
          titleTypographyProps={{ className: classes.title }}
          subheader={item.subheader}
          subheaderTypographyProps={{ className: classes.subheader }}
        />
      </Card>
    </Grid>
  ));

  return (
    <Grid className={classes.content} container spacing={5}>
      <FocusItems />
    </Grid>
  );
};

export default Focus;