import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { makeStyles } from '@material-ui/styles';
import { Grid, IconButton, Input, Tooltip } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    base: {
      color: 'transparent',
    },
    baseExpand: {
      color: 'white',
    },
    icon: {
      color: 'white',
      fontSize: 16,
    },
    input: {
      backgroundColor: 'transparent',
      cursor: 'pointer',
      paddingLeft: 12,
      paddingRight: 12,
      transition: 'width .3s ease',
      width: 64,
    },
    inputExpand: {
      backgroundColor: '#004090',
      cursor: 'normal',
      width: 300
    }
  };
});

export function DesktopSearch() {
  const classes = useStyles();
  const [expand, setExpand] = useState(false);
  const inputEl = useRef(null);
  
  const searchIcon = (
    <FontAwesomeIcon
      className={classes.icon}
      icon={['fal', 'search']}
    />
  );

  const searchComponent = (
    <Input
      autoFocus={expand}
      classes={{ 
        input: clsx(
          classes.base,
          { [classes.baseExpand]: expand }
        )
      }}
      className={
        clsx(classes.input, 
          { [classes.inputExpand]: expand }
      )}
      disableUnderline
      endAdornment={searchIcon}
      inputProps={{
        ref: inputEl,
      }}
      onBlur={() => setExpand(false)}
      onClick={() => {
        setExpand(true);
        inputEl.current.focus();
      }}
      onFocus={() => setExpand(true)}
      placeholder='Search'
      variant='outlined'
    />
  );

  return (
    <Grid item md={3}>
      <Grid container justify='flex-end'>
        {searchComponent}
        <Tooltip title='Login'>
          <IconButton component={Link} to='/login'>
            <FontAwesomeIcon
              className={classes.icon}
              icon={['fal', 'sign-in']}
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
}

export default DesktopSearch;