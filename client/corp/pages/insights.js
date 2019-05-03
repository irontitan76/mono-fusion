import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import PlusIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import insightsApi from '@fusion/api/insights';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    container: {
      margin: spacing(3),
      width: '100%',
    },
    row: {},
    table: {
      '& td': {
        color: 'inherit',
        paddingBottom: spacing(1) * .5,
        paddingTop: spacing(1) * .5,
      },
    },
    title: {
      color: palette.primary.main,
      fontWeight: 300,
      marginBottom: spacing(2),
      marginTop: spacing(1) * 1.5,
    },
    wrapper: {
      width: '100%',
    }
  };
});

export function Insights() {
  const classes = useStyles();
  const [insights, setInsights] = useState([]);
  const [open, setOpen] = useState({});

  useEffect(() => {
    if (!insights || insights.length === 0 ) {
      insightsApi.getAll().then((result) => {
        setInsights(result.data.data.insights);
      });
    }

    return () => console.log('unmounted');
  });

  const Title = () => (
    <Grid item>
      <Typography className={classes.title} variant='h4'>
        Insights
      </Typography>
    </Grid>
  );

  const Menu = () => (
    <Grid item>
      <IconButton>
        <SearchIcon color='primary' />
      </IconButton>
      <IconButton>
        <PlusIcon color='primary' />
      </IconButton>
    </Grid>
  );

  const Headers = () => {
    const headers = ['ID', 'INSIGHT', 'AUTHOR', 'PUBLISHED AT', ''];
    const headersCells = headers.map((header) => <TableCell key={header}>{header}</TableCell>);

    return (
      <TableHead>
        <TableRow>
          {headersCells}
        </TableRow>
      </TableHead>
    );
  };

  const Rows = () => {
    const collapsedStyle = { border: 'none', fontSize: 0, margin: 0, padding: 0 };

    return insights.map((insight, index) => {
      const items = [
        { value: insight.id },
        { value: insight.title, path: `/insight?id=${insight.id}` },
        { value: insight.authorId, path: `/people?id=${insight.authorId}` },
        { value: moment.unix(insight._publishedAt._seconds).format('MMM DD, YYYY') },
      ];

      const cells = items.map((item, index) => {
        const Wrapper = ({ children }) => (
          <Link href={item.path}>
            <a>{children}</a>
          </Link>
        );
        
        if (item.path) {
          return (
            <TableCell key={item.value + index}>
              <Wrapper>{item.value}</Wrapper>
            </TableCell>
          );
        }

        return <TableCell key={item.value + index}>{item.value}</TableCell>;
      });

      return (
        <TableBody key={insight.id}>
          <TableRow
            className={classes.row}
            key={insight.id}
            onClick={() => setOpen({ [index]: !open[index] })}
          >
            {cells}
            <TableCell style={{ textAlign: 'right' }}>
              <FontAwesomeIcon
                className={open[index] ? 'fa-rotate-90' : ''}
                color='primary'
                icon={['fal', 'chevron-right']}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <Collapse
              colSpan={10}
              component={TableCell}
              in={open[index]}
              timeout={500}
              style={ !open[index] ? collapsedStyle: { padding: 25 }}
            >
              Test
            </Collapse>
          </TableRow>
        </TableBody>
      );
    })
  };

  return (
    <div className={classes.container}>
      <Grid
        alignItems='center'
        container
        justify='space-between'
        >
        <Title />
        <Menu />
      </Grid>
      <Table className={classes.table}>
        <Headers />
        <Rows />
      </Table>
    </div>
  );
}

export default Insights;