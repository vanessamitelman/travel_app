import React, { useContext } from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { TravelContext } from '../../TravelContext';

const TypeControl = () => {
  const { type, setType } = useContext(TravelContext);

  return (
    <>
      <InputLabel>Type</InputLabel>
      <Select value={type} onChange={(e) => setType(e.target.value)}>
        <MenuItem value='restaurants'>Restaurants</MenuItem>
        <MenuItem value='hotels'>Hotels</MenuItem>
        <MenuItem value='attractions'>Attractions</MenuItem>
      </Select>
    </>
  );
};

export default TypeControl;
