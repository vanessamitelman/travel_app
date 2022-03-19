import React from 'react';
import useStyles from './styles'; //useStyles is a hook
import { Chip } from '@material-ui/core';

const PlaceCuisine = ({ key, label }) => {
  const classes = useStyles();
  return <Chip key={key} size='small' label={label} className={classes.chip} />;
};

export default PlaceCuisine;
