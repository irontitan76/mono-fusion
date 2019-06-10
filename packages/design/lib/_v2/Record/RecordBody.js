import React from 'react';
import get from 'lodash.get';

import { makeStyles } from '@material-ui/styles';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { faPalette } from '@fortawesome/pro-light-svg-icons';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';

  return {
    noResults: {
      color: palette.grey[isDark ? 200 : 400],
      textAlign: 'center',
    }
  };
});

export function RecordBody({ data = [], numColumns, paths, rows }) {
  const classes = useStyles();

  const isEmpty = () => {
    if ((!data || data.length === 0) && (!rows || rows.length === 0)) {
      return true;
    }

    return false;
  }
  
  const getProperties = () => {
    return data.map((item, i) => {
      const cells = paths.map((path, j) => {
        let value = '';

        if (Array.isArray(path)) {
          path.forEach((p) => {
            value = `${value} ${get(item, p)}`;
          });
        } else {
          value = get(item, path);
        }

        return (
          <TableCell key={j}>
            {value}
          </TableCell>
        )
      });

      return (
        <TableRow key={i}>
          {cells}
        </TableRow>
      );
    });
  };

  const getRows = () => {
    return rows.map((row, index) => {
      const renderedCells = Object.keys(row).map((key) => {
        const value = row[key];

        return (
          <TableCell key={value}>
            {value}
          </TableCell>
        );
      });

      return (
        <TableRow key={index}>
          {renderedCells}
        </TableRow>
      );
    });
  };

  let content;
  if (isEmpty()) {
    content = (
      <TableRow>
        <TableCell
          className={classes.noResults}
          colSpan={numColumns}
        >
          No results
        </TableCell>
      </TableRow>
    );
  } else if (rows) {
    content = getRows();
  } else {
    content = getProperties();
  }

  return (
    <TableBody>
      {content}
    </TableBody>
  )
};

export default RecordBody;