import React from 'react'

import { makeStyles } from '@material-ui/styles';
import { Table } from '@material-ui/core';

import RecordBody from './RecordBody';
import RecordHead from './RecordHead';

const useStyles = makeStyles(() => {
  return {

  };
});

export function Record({ data, headers, paths, rows }) {
  const classes = useStyles();

  return (
    <Table>
      <RecordHead headers={headers} />
      <RecordBody
        data={data}
        paths={paths}
        numColumns={headers.length}
        rows={rows}
      />
    </Table>
  );
};

export default Record;