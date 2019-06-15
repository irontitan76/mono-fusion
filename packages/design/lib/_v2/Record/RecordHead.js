import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { TableCell, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {

  };
});

export function RecordHead({ headers, withControls }) {
  const classes = useStyles();

  const renderedHeaders = headers.map((header) => {
    return (
      <TableCell key={header.value}>
        {header.value}
      </TableCell>
    );
  });

  const renderedRow = (
    <TableRow>
      {renderedHeaders}
      {withControls ? <TableCell /> : null}
    </TableRow>
  );

  return (
    <TableHead>
      {renderedRow}
    </TableHead>
  );
};

export default RecordHead;