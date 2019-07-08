import React, { useState } from 'react';
import { Link as RRLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Drawer, IconButton, Input, Link, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => {
  return {
    drawer: {
      top: '64px !important',
      zIndex: 1100,
    },
    icon: {
      color: palette.getContrastText(palette.primary.dark),
    },
    itemText: {
      color: palette.getContrastText(palette.background.paper),
    },
    paper: {
      backgroundColor: palette.background.paper,
      top: 48,
      width: '100vw',
    },
    search: {
      marginBottom: spacing(1),
    },
    searchIcon: {
      fontSize: 14,
      marginRight: spacing(1),
    },
  };
});

export function MobileMenu({ items }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(!open)}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={['fal', `ellipsis-v${open ? '-alt': ''}`]}
        />
      </IconButton>
      <Drawer
        anchor='right'
        classes={{
          paper: classes.paper
        }}
        className={classes.drawer}
        ModalProps={{ hideBackdrop: true }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          <ListItem>
            <Input
              className={classes.search}
              fullWidth
              placeholder='Search'
              endAdornment={
                <IconButton className={classes.searchIcon} onClick={() => null}>
                  <FontAwesomeIcon icon={['fal', 'search']} />
                </IconButton>
              } 
            />
          </ListItem>
          {items.map((item) => {
            return (
              <Link
                component={RRLink}
                key={item.name}
                to={item.path}
                underline='none'
              >
                <ListItem button>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      className: classes.itemText,
                    }}
                  />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default MobileMenu;