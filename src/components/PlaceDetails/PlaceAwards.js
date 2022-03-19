import React from 'react'
import { Box, Typography } from '@material-ui/core';

const PlaceAwards = ({key,award}) => {
  return (
    <Box
    key={key}
    display='flex'
    justifyContent='space-between'
    alignItems='center'
  >
    <img src={award.images.small} alt={award.display_name} />
    <Typography variant='subtitle2' color='textSecondary'>
      {award.display_name}
    </Typography>
  </Box>
  )
}

export default PlaceAwards