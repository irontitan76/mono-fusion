import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/styles';

import Page from '../../layouts/Page';
import { ManifestContext } from '@fusion/design/lib/Provider/Manifest';
import Record from '@fusion/design/lib/_v2/Record/Record';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    item: {
      height: 'calc(100vh - 100px)',
      paddingLeft: spacing(5),
      paddingRight: spacing(5),
      paddingTop: spacing(3),
    },
    title: {
      color: palette.grey[700],
      marginBottom: spacing(2),
    },
  };
});

export function People() {
  const manifest = useContext(ManifestContext);
  const { record, slideout, titlebar } = manifest.pages.people;
  const classes = useStyles();
  
  return (
    <Page
      ItemProps={{ className: classes.item }}
      SlideoutProps={{ title: slideout.title }}
      TitleBarProps={{ buttonLabel: titlebar.button, title: titlebar.title }}
    >
      <Record headers={record.headers} rows={record.rows} />
    </Page>
  );
}

export default People;

