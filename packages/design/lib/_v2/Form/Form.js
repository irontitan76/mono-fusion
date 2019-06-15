import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';
import { Button, Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => {
  return {
    field: {
      marginBottom: spacing(2),
      '& *': {
        fontSize: 14,
      }
    },
    outlinedField: {
      borderRadius: 0,
    },
  };
});

export function Form({ fields, onSubmit }) {
  const classes = useStyles();
  let fieldsState = {};

  fields.forEach((field) => {
    fieldsState[field.name] = field.value || '';
  });

  const [disabled, setDisabled] = useState(true);
  const [values, setValues] = useState(fieldsState || {});

  const onChange = (event) => {
    event.preventDefault();
    return setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onClick = (event) => {
    event.preventDefault();
    return onSubmit({ variables: values });
  }

  const contents = fields.map((field) => {
    return (
      <TextField
        className={classes.field}
        InputProps={{ classes: { 
          notchedOutline: classes.outlinedField 
        }}}
        key={field.name}
        margin='dense'
        onChange={onChange}
        {...field}
        value={values[field.name]}
      />
    );
  });

  return (
    <form onSubmit={onClick}>
      <Grid container direction='column'>
        <Grid item xs={12}>
          {contents}
        </Grid>
        <Button
            color='primary'
            // disabled={disabled}
            type='submit'
            variant='contained'
          >
            Add
          </Button>
      </Grid>
    </form>
  );
}

Form.propTypes = {};

export default Form;