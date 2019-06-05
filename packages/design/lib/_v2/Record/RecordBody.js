import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { TableBody, TableCell, TableRow, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {

  };
});

export function RecordBody({ rows }) {
  const classes = useStyles();

  const renderedRows = rows.map((row, index) => {
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

  return (
    <TableBody>
      {renderedRows}
    </TableBody>
  )
};

export default RecordBody;