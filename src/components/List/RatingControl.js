import React, { useContext } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { TravelContext } from '../../TravelContext';
import useStyles from './styles'; //useStyles is a hook

const RatingControl = () => {
  const classes = useStyles();

  const { rating, setRating } = useContext(TravelContext);
  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Rating</InputLabel>
      <Select
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ width: '100px' }}
      >
        <MenuItem value={0}>All</MenuItem>
        <MenuItem value={3}>Above 3.0</MenuItem>
        <MenuItem value={4}>Above 4.0</MenuItem>
        <MenuItem value={4.5}>Above 4.5</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RatingControl;
