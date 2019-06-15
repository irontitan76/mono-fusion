import React, { useState } from 'react';
import omit from 'lodash.omit';

import { makeStyles } from '@material-ui/styles';
import { Button, IconButton, Modal, Paper, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles(({ palette, shadows, spacing }) => {
  return {
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    iconButton: {
      '&:first-child': {
        marginRight: spacing(1),
      },
      borderRadius: '50%',
      fontSize: 12,
      padding: spacing(.75)
    },
    message: {
      fontSize: 12,
      marginBottom: spacing(2),
    },
    paper: {
      backgroundColor: palette.background.paper,
      boxShadow: shadows[5],
      left: 'calc(50% - 200px)',
      outline: 'none',
      padding: spacing(4),
      position: 'absolute',
      top: '40%',
      width: 400,
    },
    rightMargin: {
      marginRight: spacing(2),
    },
  };
});

export function RecordControls({ controls, edit, item, remove }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const Delete = () => (
    <Tooltip title='Delete'>
      <IconButton
        className={classes.iconButton}
        onClick={(event) => {
          event.preventDefault();
          setModalOpen('true');
        }}>
          {remove.icon}
      </IconButton>
    </Tooltip>
  );

  const Edit = () => {
    const Wrapper = ({ children }) => {
      const check = RegExp(`{.*}`, "g");
      const attributes = edit.href.match(check);

      let path = edit.href;
      attributes.forEach((attr) => {
        path = edit.href
          .replace(attr, item[attr.substring(1, attr.length - 1)])
      });

      return (
        <edit.component
          href={path}
          {...omit(edit, ['component', 'href', 'icon'])}
        >
          {children}
        </edit.component>
      )
    };

    return (
      <Tooltip title='Edit'>
        <IconButton className={classes.iconButton}>
          <Wrapper>
            {edit.icon}
          </Wrapper>
        </IconButton>
      </Tooltip>
    );
  };

  return (
    <>
      <div className={classes.buttons}>
        <Edit />
        <Delete />
        {controls}
      </div>
      <Modal onClose={() => setModalOpen(null)} open={!!modalOpen}>
        <Paper className={classes.paper}>
          <Typography gutterBottom variant='h6'>
            <span className={classes.rightMargin}>{remove.icon}</span>
            {remove.title}
          </Typography>
          <Typography className={classes.message}>
            {remove.message}
          </Typography>
          <div>
            <Button
              className={classes.rightMargin}
              color='primary'
              variant='outlined'
            >
              Yes, delete
            </Button>
            <Button variant='outlined'>No</Button>
          </div>
        </Paper>
      </Modal>
    </>
  )
}

RecordControls.defaultProps = {};

export default RecordControls;