import React, { Fragment, useState } from 'react';
import moment from 'moment';
import classNames from 'classnames';
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
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    cell: {
      color: palette.primary.light,
    },
    container: {
      margin: spacing(3),
      width: '100%',
    },
    icon: {
      '&:hover': {
        color: palette.primary.light,
      },
    },
    row: {},
    searchInput: {
      marginRight: 15,
      padding: 8,
      width: 300,
    },
    searchInputBase: {
      fontSize: 14,
      padding: 8,
    },
    table: {
      '& td': {
        color: 'inherit',
        paddingBottom: spacing(1) * 0.5,
        paddingTop: spacing(1) * 0.5,
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
    },
  };
});

export function Articles({
  attr,
  headers,
  LinkComponent,
  onChange,
  onKeyDown,
  placeholder,
  prefix,
  rows,
  searchValue,
  title,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState({});

  const Title = () => (
    <Grid item>
      <Typography className={classes.title} variant="h4">
        {title}
      </Typography>
    </Grid>
  );

  const Menu = () => (
    <Grid item>
      <TextField
        autoFocus
        className={classes.searchInput}
        inputProps={{ className: classes.searchInputBase }}
        InputProps={{ endAdornment: <SearchIcon color="primary" /> }}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        value={searchValue}
        variant="outlined"
      />
      <IconButton>
        <PlusIcon color="primary" />
      </IconButton>
    </Grid>
  );

  const Headers = () => {
    const headersCells = headers.map((header) => (
      <TableCell key={header}>{header}</TableCell>
    ));

    return (
      <TableHead>
        <TableRow>{headersCells}</TableRow>
      </TableHead>
    );
  };

  const Rows = () => {
    const collapsedStyle = { border: 'none', fontSize: 0, margin: 0, padding: 0 };

    return (
      <TableBody>
        {rows.map((row, index) => {
          const items = [
            { value: row.title, path: `/${prefix}?${attr}=${row[attr]}` },
            {
              value: row.authorId || (
                <span style={{ color: 'gray', fontWeight: 500 }}>ROOT</span>
              ),
            },
            { value: moment(row._publishedAt).format('MMM DD, YYYY') },
          ];

          const cells = items.map((item, index) => {
            const Wrapper = ({ children }) => (
              <LinkComponent href={item.path}>
                <a className={classes.cell}>{children}</a>
              </LinkComponent>
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
            <Fragment key={row.id}>
              <TableRow className={classes.row}>
                {cells}
                <TableCell
                  onClick={() => setOpen({ [index]: !open[index] })}
                  style={{ textAlign: 'right' }}
                >
                  <FontAwesomeIcon
                    className={classNames(classes.icon, {
                      'fa-rotate-90': open[index],
                    })}
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
                  style={!open[index] ? collapsedStyle : { padding: 25 }}
                >
                  Test
                </Collapse>
              </TableRow>
            </Fragment>
          );
        })}
      </TableBody>
    );
  };

  return (
    <div className={classes.container}>
      <Grid alignItems="center" container justify="space-between">
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

export default Articles;
