import React from 'react';
import { Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import useStyles from './styles'; //useStyles is a hook

const PlaceAddress = ({place}) => {
    const classes = useStyles();
  return (
    <Typography
      gutterBottom
      variant='subtitle2'
      color='textSecondary'
      className={classes.subtitle}
    >
      <LocationOnIcon />
      {place.address}
    </Typography>
  );
};

export default PlaceAddress;
