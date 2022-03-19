import React from 'react';
import { Box, Typography } from '@material-ui/core';

const PlaceRanking = ({ place }) => {
  return (
    <Box display='flex' justifyContent='space-between'>
      <Typography variant='subtitle1'>Ranking</Typography>
      <Typography gutterBottom variant='subtitle1'>
        {place.ranking}
      </Typography>
    </Box>
  );
};

export default PlaceRanking;
