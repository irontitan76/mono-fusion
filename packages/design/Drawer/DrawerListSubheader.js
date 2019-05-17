import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(({ palette }) => {
  return {
    divider: {
      color: palette.divider,
    },
    listItemSubheader: {
      color: palette.getContrastText(palette.primary.main),
      fontSize: 24,
      height: 48,
    },
  };
});

export function DrawerListSubheader({
  collapsedTitle,
  expandedTitle,
  isExpanded,
  isHorizontal,
  onToggle,
}) {
  const classes = useStyles();

  if (!collapsedTitle && !expandedTitle) return null;

  const Button = () => {
    if (isHorizontal) return null;

    return (
      <Grid item style={{ marginBottom: 30 }}>
        <IconButton className={classes.listButton} onClick={onToggle}>
          <MenuIcon />
        </IconButton>
      </Grid>
    );
  };

  const Title = () => (isHorizontal && !isExpanded ? collapsedTitle : expandedTitle);

  return (
    <>
      <ListSubheader className={classes.listItemSubheader}>
        <Grid container justify="space-between">
          <Grid item style={{ flexGrow: 1 }}>
            <Title />
          </Grid>
          <Button />
        </Grid>
      </ListSubheader>
      <Divider className={classes.divider} />
    </>
  );
}

export default DrawerListSubheader;
