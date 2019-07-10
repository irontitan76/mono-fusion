import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { IconButton, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(({ palette }) => {
  const isDark = palette.type === 'dark';

  return {
    icon: {
      color: isDark ? '#717171' : '#414141',
    },
  };
});

export function MarkdownCodebar({ buttons, value }) {
  const [copyLabel, setCopyLabel] = useState("Copy");
  const classes = useStyles();

  const onCopy = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(value);
    setCopyLabel("Copied!");
    setTimeout(() => setCopyLabel("Copy"), 300);
  };

  return buttons ? buttons.map((button) => {
    if (button[0] === 'copy') {
      return (
        <Tooltip key='copy' title={copyLabel}>
          <IconButton
            className={classes.iconButton}
            onClick={onCopy}
          >
            {button[1]}
          </IconButton>
        </Tooltip>
      )
    }

    const { icon, title, ...other } = button;
    
    return (
      <Tooltip key={title} title={title}>
        <IconButton
          className={classes.iconButton}
          {...other}
        >
          {icon}
        </IconButton>
      </Tooltip>
    );
  }) : null;
}

export default MarkdownCodebar;