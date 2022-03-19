import React, { useContext } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook
import { TravelContext } from '../../TravelContext';

const TypeControl = () => {
  const classes = useStyles();
  const { type, setType } = useContext(TravelContext);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Type</InputLabel>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <MenuItem value='restaurants'>Restaurants</MenuItem>
        <MenuItem value='hotels'>Hotels</MenuItem>
        <MenuItem value='attractions'>Attractions</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeControl;
