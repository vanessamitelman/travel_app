import React from 'react';
import { Box, Typography } from '@material-ui/core';

const PlacePrice = ({ place }) => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Typography variant='subtitle1'>Price</Typography>
      <Typography gutterBottom variant='subtitle1'>
        {place.price_level}
      </Typography>
    </Box>
  );
};

export default PlacePrice;
