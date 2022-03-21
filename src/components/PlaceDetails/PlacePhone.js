import React from 'react';
import useStyles from './styles'; //useStyles is a hook
import { Typography } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';

const PlacePhone = ({ place }) => {
  const classes = useStyles();

  return (
    <Typography
      gutterBottom
      variant='subtitle2'
      color='textSecondary'
      className={classes.spacing}
    >
      <PhoneIcon />
      {place.phone}
    </Typography>
  );
};

export default PlacePhone;
