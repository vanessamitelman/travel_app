import React from 'react';
import { Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const PlaceRating = ({ place }) => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Rating value={Number(place.rating)} readOnly />
      <Typography gutterBottom variant='subtitle1'>
        out of {place.num_reviews} reviews
      </Typography>
    </Box>
  );
};

export default PlaceRating;
