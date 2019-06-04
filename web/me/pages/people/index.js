import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';

import { IconButton, Tooltip } from '@material-ui/core';

import Contents from '@fusion/design/lib/_v2/Contents/Contents';
import Markdown from '@fusion/design/lib/_v2/Markdown/Markdown';
import Split from '@fusion/design/lib/_v2/Split/Split';

import standards from '../../static/markdown/FusionStandard.md';
import Page from '../../layouts/Page';

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
  const classes = useStyles();

  const onCopy = (event, value) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    setCopyLabel("Copied!");
    setTimeout(() => setCopyLabel("Copy"), 300);
  };

  const MarkDownRender = () => {
    const codeBar = [
      <div onClick={onCopy}>
        <Tooltip title={copyLabel}>
          <IconButton className={classes.iconButton}>
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
      </Tooltip>
    ];

    return (
      <Markdown
        codeProps={{ buttons: codeBar }}
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
    <Page
      SlideoutProps={{ title: "Details" }}
      TitleBarProps={{ buttonLabel: "Manage People", title: "People" }}
    >
      <Split
        left={<MarkDownRender />}
        right={<Contents items={headers} title="Contents" />}
      />
    </Page>
  );
}

export default Payroll;

