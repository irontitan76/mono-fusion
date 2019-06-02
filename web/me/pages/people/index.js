import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import { IconButton, Grid, Tooltip } from '@material-ui/core';

import Contents from '@fusion/design/lib/_v2/Contents/Contents';
import Markdown from '@fusion/design/lib/_v2/Markdown/Markdown';
import Page from '@fusion/design/lib/_v2/Page/Page';
import Slideout from '@fusion/design/lib/_v2/Slideout/Slideout';
import TitleBar from '@fusion/design/lib/_v2/TitleBar/TitleBar';

import standards from '../../static/markdown/FusionStandard.md';

const useStyles = makeStyles(({ palette, spacing }) => {
  const isDark = palette.type === 'dark';

  return {
    icon: {
      color: isDark ? '#717171' : '#414141',
    },
    iconButton: {
      borderRadius: '50%',
      padding: spacing(1.5),
    },
    root: {
      '& main': {
        height: '100%',
        paddingLeft: spacing(5),
        paddingRight: spacing(5)
      },
      boxSizing: 'border-box',
      height: '100%',
    }
  };
});

export function Payroll() {
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const onCopy = (event, value) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    setCopyLabel("Copied!");
    setTimeout(() => setCopyLabel("Copy"), 300);
  };

  const Md = () => {
    return (
      <Markdown
        codeProps={{
          buttons: [
            <div onClick={onCopy}>
              <Tooltip title={copyLabel}>
                <IconButton 
                  className={classes.iconButton}
                >
                    <FontAwesomeIcon
                      className={classes.icon}
                      style={{ fontSize: 18 }}
                      icon={["fal", "copy"]}
                    />
                </IconButton>
              </Tooltip>
            </div>,
            <Tooltip title="View source code">
              <IconButton
                className={classes.iconButton}
                component="a"
                href="https://github.com"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={classes.icon}
                  icon={["fab", "github"]}
                />
              </IconButton>
            </Tooltip>,
          ]
        }}
        source={standards}
      />
    );
  }

  const headers = standards.match(/(^|\n)#{2} .*\n/g).map((header) => {
    const label = header.replace(/(\*|#)*/g, '').trim();
    return {
      label,
      path: {
        component: Link,
        href: `#${label.replace(' ', '-').toLowerCase()}`
      }
    };
  });

  headers.unshift({
    label: "Back to top",
    path: { component: Link, href: "#" },
  });
  
  return (
    <Grid className={classes.root} container>
      <TitleBar
        buttonLabel="Manage People"
        onClick={() => setOpen(true)}
        title="People"
      />
      <Grid component='main' item xs={12}>
        <Page
          left={<Md />}
          right={<Contents
            items={headers}
            title="Contents"
          />}
        />
        <Slideout
          open={open}
          onClose={() => setOpen(false)}
          title="Details"
        />
      </Grid>
    </Grid>
  );
}

export default Payroll;

