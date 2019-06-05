import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { Table } from '@material-ui/core';

import RecordBody from './RecordBody';
import RecordHead from './RecordHead';

const useStyles = makeStyles(() => {
  return {

  };
});

export function Record({ headers, rows }) {
  const classes = useStyles();

  return (
    <Table>
      <RecordHead headers={headers} />
      <RecordBody rows={rows} />
    </Table>
  );
};

export default Record;