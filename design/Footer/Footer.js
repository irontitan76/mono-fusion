import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';
  const bgColor = isDark ? '#1d1d1d' : '#f2f2f2';
  const borderColor = palette.grey[isDark ? 700 : 'A100'];  

  return {
    footer: {
      backgroundColor: bgColor,
      borderTop: `1px solid ${borderColor}`,
      color: palette.getContrastText(palette.grey[200]),
      marginTop: spacing(4),
      padding: `${spacing(5)}px ${spacing(10)}px`,
    },
    item: {
      fontSize: 12,
      fontWeight: 300,
      marginBottom: 7,
    },
    title: {
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 10,
    },
  };
});

const columns = [
  {
    items: [
      { name: 'Test Link 1', path: '/test/1' },
      { name: 'Test Link 2', path: '/test/2' },
      { name: 'Test Link 3', path: '/test/3' },
      { name: 'Test Link 4', path: '/test/4' },
    ],
    title: 'Test 1',
  },
  {
    items: [
      { name: 'Test Link 1', path: '/test/1' },
      { name: 'Test Link 2', path: '/test/2' },
      { name: 'Test Link 3', path: '/test/3' },
      { name: 'Test Link 4', path: '/test/4' },
    ],
    title: 'Test 2',
  },
]

export default function Footer() {
  const classes = useStyles();

  const ColumnMenu = ({ items }) => {
    return items.map((item) => {
      return (
        <Typography className={classes.item} key={item.name}>{item.name}</Typography>
      )
    })
  };

  const Columns = () => {
    return columns.map((column) => {
      return (
        <Grid item key={column.title} xs={12} md={3}>
          <ColumnTitle title={column.title} />
          <ColumnMenu items={column.items} />
        </Grid>
      )
    })
  };

  const ColumnTitle = ({ title }) => {
    return <Typography 
      className={classes.title}
    >
      {title}
    </Typography>;
  }

  return (
    <Grid
      className={classes.footer}
      container
      component='footer'
    >
      <Columns />
    </Grid>
  );
};