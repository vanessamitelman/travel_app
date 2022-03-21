import React from 'react';
import { Typography } from '@material-ui/core';

const PlaceTitle = ({ place }) => {
  return (
    <Typography gutterBottom variant='h5'>
      {place.name}
    </Typography>
  );
};

export default PlaceTitle;
